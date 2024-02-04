import * as Sentry from '@sentry/node';
import { ProfilingIntegration } from '@sentry/profiling-node';
import { H3Error } from 'h3';

export default defineNitroPlugin((nitroApp) => {
    const {
        public: { sentry }
    } = useRuntimeConfig();

    // @ts-ignore
    if (!sentry.dsn) {
        console.warn('Sentry DSN not set, skipping Sentry initialization');

        return;
    }

    Sentry.init({
        // @ts-ignore
        dsn: sentry.dsn,
        // @ts-ignore
        environment: sentry.environment,
        integrations: [new ProfilingIntegration()],
        // Performance Monitoring
        tracesSampleRate: 0.2,
        // Set sampling rate for profiling - this is relative to tracesSampleRate
        profilesSampleRate: 0.2
    });

    nitroApp.hooks.hook('error', (error) => {
        // Do not handle 404s and 422s
        if (error instanceof H3Error) {
            if (error.statusCode === 404 || error.statusCode === 422) {
                return;
            }
        }

        Sentry.captureException(error);
    });

    nitroApp.hooks.hook('request', (event) => {
        event.context.$sentry = Sentry;
    });

    nitroApp.hooks.hookOnce('close', async () => {
        await Sentry.close(2000);
    });
});
