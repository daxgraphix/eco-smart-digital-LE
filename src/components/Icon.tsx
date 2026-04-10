import * as Icons from 'lucide-react';
import type { ComponentType } from 'react';
import type { LucideIconProps } from 'lucide-react';

export const Icon = ({ name, ...props }: { name: keyof typeof Icons } & LucideIconProps) => {
  const LucideIcon = Icons[name] as ComponentType<LucideIconProps> | undefined;
  if (!LucideIcon) return <Icons.HelpCircle {...props} />;
  return <LucideIcon {...props} />;
};
