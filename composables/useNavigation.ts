import type { MenuItem } from 'primevue/menuitem';

export default function useNavigation() {
    const mainNav: MenuItem[] = [
        {
            label: 'menu.home.title',
            icon: 'pi pi-home',
            route: '/'
        },
        {
            label: 'menu.about.title',
            icon: 'pi pi-star',
            route: '/about'
        },
        {
            label: 'menu.projects.title',
            icon: 'pi pi-search',
            items: [
                {
                    label: 'menu.projects.child.core.title',
                    items: [
                        {
                            label: 'menu.projects.child.templates.child.apollo.title',
                            icon: 'pi pi-palette',
                            badge: 2,
                            route: '/apollo'
                        },
                        {
                            label: 'menu.projects.child.templates.child.ultima.title',
                            icon: 'pi pi-palette',
                            badge: 3,
                            route: '/ultima'
                        }
                    ]
                },
                {
                    label: 'menu.projects.child.blocks.title',
                    items: [
                        {
                            label: 'menu.projects.child.templates.child.apollo.title',
                            icon: 'pi pi-palette',
                            badge: 2,
                            route: '/apollo'
                        },
                        {
                            label: 'menu.projects.child.templates.child.ultima.title',
                            icon: 'pi pi-palette',
                            badge: 3,
                            route: '/ultima'
                        }
                    ]
                },
                {
                    label: 'menu.projects.child.ui-kit.title',
                    items: [
                        {
                            label: 'menu.projects.child.templates.child.apollo.title',
                            icon: 'pi pi-palette',
                            badge: 2,
                            route: '/apollo'
                        },
                        {
                            label: 'menu.projects.child.templates.child.ultima.title',
                            icon: 'pi pi-palette',
                            badge: 3,
                            route: '/ultima'
                        }
                    ]
                }
            ]
        },
        {
            label: 'menu.contact.title',
            icon: 'pi pi-envelope',
            badge: 3,
            route: '/contact'
        }
    ];

    return { mainNav };
}
