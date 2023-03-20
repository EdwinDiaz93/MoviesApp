import { RouterLinkProps } from 'vue-router'
export interface Link {
    id: number;
    label: string;
    to: RouterLinkProps;
}