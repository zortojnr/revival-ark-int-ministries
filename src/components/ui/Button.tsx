'use client';

import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  // Base styles
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-fast focus-ring disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 shadow-sm hover:shadow-md",
        secondary: "bg-secondary-600 text-white hover:bg-secondary-700 active:bg-secondary-800 shadow-sm hover:shadow-md",
        accent: "bg-accent-500 text-white hover:bg-accent-600 active:bg-accent-700 shadow-sm hover:shadow-md",
        outline: "border-2 border-primary-600 text-primary-600 hover:bg-primary-50 active:bg-primary-100",
        ghost: "text-secondary-700 hover:bg-neutral-100 active:bg-neutral-200",
        link: "text-primary-600 hover:text-primary-700 underline-offset-4 hover:underline",
        destructive: "bg-error-600 text-white hover:bg-error-700 active:bg-error-800 shadow-sm hover:shadow-md",
        success: "bg-success-600 text-white hover:bg-success-700 active:bg-success-800 shadow-sm hover:shadow-md",
        warning: "bg-warning-500 text-white hover:bg-warning-600 active:bg-warning-700 shadow-sm hover:shadow-md",
        info: "bg-info-600 text-white hover:bg-info-700 active:bg-info-800 shadow-sm hover:shadow-md",
      },
      size: {
        xs: "h-8 px-3 text-xs",
        sm: "h-9 px-4 text-sm",
        md: "h-10 px-6 text-sm",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
      loading: {
        true: "cursor-not-allowed",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
      loading: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loadingText?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      loading = false,
      leftIcon,
      rightIcon,
      loadingText,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth, loading, className }))}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        
        {!loading && leftIcon && (
          <span className="flex-shrink-0">
            {leftIcon}
          </span>
        )}
        
        <span className={loading ? "opacity-70" : ""}>
          {loading && loadingText ? loadingText : children}
        </span>
        
        {!loading && rightIcon && (
          <span className="flex-shrink-0">
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

// Button Group Component
export interface ButtonGroupProps {
  children: React.ReactNode;
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  className,
  orientation = 'horizontal',
  size = 'md',
  variant = 'primary',
}) => {
  const groupStyles = orientation === 'horizontal' 
    ? "flex rounded-lg overflow-hidden shadow-sm" 
    : "flex flex-col rounded-lg overflow-hidden shadow-sm";

  return (
    <div className={cn(groupStyles, className)} role="group">
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement<ButtonProps>(child)) {
          const isFirst = index === 0;
          const isLast = index === React.Children.count(children) - 1;
          
          const groupedStyles = orientation === 'horizontal'
            ? cn(
                "rounded-none border-r border-white/20 last:border-r-0",
                isFirst && "rounded-l-lg",
                isLast && "rounded-r-lg"
              )
            : cn(
                "rounded-none border-b border-white/20 last:border-b-0",
                isFirst && "rounded-t-lg",
                isLast && "rounded-b-lg"
              );

          return React.cloneElement(child, {
            ...child.props,
            size: child.props.size || size,
            variant: child.props.variant || variant,
            className: cn(child.props.className, groupedStyles),
          });
        }
        return child;
      })}
    </div>
  );
};

// Icon Button Component
export interface IconButtonProps extends Omit<ButtonProps, 'leftIcon' | 'rightIcon'> {
  icon: React.ReactNode;
  'aria-label': string;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, className, size = 'icon', ...props }, ref) => {
    return (
      <Button
        ref={ref}
        size={size}
        className={cn("p-0", className)}
        {...props}
      >
        {icon}
      </Button>
    );
  }
);

IconButton.displayName = "IconButton";

// Floating Action Button Component
export interface FABProps extends Omit<ButtonProps, 'variant' | 'size'> {
  icon: React.ReactNode;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  size?: 'md' | 'lg';
}

export const FloatingActionButton: React.FC<FABProps> = ({
  icon,
  position = 'bottom-right',
  size = 'lg',
  className,
  ...props
}) => {
  const positionStyles = {
    'bottom-right': 'fixed bottom-6 right-6',
    'bottom-left': 'fixed bottom-6 left-6',
    'top-right': 'fixed top-6 right-6',
    'top-left': 'fixed top-6 left-6',
  };

  const sizeStyles = {
    md: 'h-12 w-12',
    lg: 'h-14 w-14',
  };

  return (
    <Button
      variant="primary"
      className={cn(
        positionStyles[position],
        sizeStyles[size],
        "rounded-full shadow-lg hover:shadow-xl z-fab",
        className
      )}
      {...props}
    >
      {icon}
    </Button>
  );
};

export { Button, buttonVariants };
export default Button;