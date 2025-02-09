export type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
};

export interface MenuProps {
  title: React.ReactNode
  linkGroups: Array<{
    label: string
    link?: string | null
  }>
}

export interface EventsProps {
  name: string
  date: string
  location: string
  href: string
  description: string
}