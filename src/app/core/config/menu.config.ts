import {HeaderMenu} from '../models/menu.model';

export const adminHeaderMenuData: HeaderMenu[] = [
  {
    id: 1,
    label: 'Accueil',
    icon: 'pi pi-objects-column',
    link: '/user-space/admin'
  },
  {
    id: 2,
    label: 'Clients',
    icon: 'pi pi-users',
    link: '/user-space/clients'
  },
  {
    id: 3,
    label: 'Rendez-vous',
    icon: 'pi pi-send',
    link: '/user-space/appointments'
  },
  {
    id: 4,
    label: 'Services',
    icon: 'pi pi-cog',
    link: '/user-space/services'
  },
  {
    id: 5,
    label: 'Mécaniciens',
    icon: 'pi pi-users',
    link: '/user-space/mechanics'
  },
]
