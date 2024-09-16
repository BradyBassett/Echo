import React from 'react';

interface ButtonProps {
	type?: "button" | "submit" | "reset";
	variant?: "primary" | "secondary"
	className?: string;
	id?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	children: React.ReactNode;
}

const ModularButton: React.FC<ButtonProps> = ({type, variant, className, id, onClick, children}) => {
	const baseStyles = "border-2 border-white rounded-lg px-4 py-2 text-2xl font-semibold drop-shadow-md";
	const variantStyles = variant === "primary" ? "bg-white text-black hover:bg-neutral-300 hover:border-neutral-300" :
												variant === "secondary" ? "bg-transparent text-white hover:bg-white hover:bg-opacity-30" : "";
	const buttonClassName = `${baseStyles} ${variantStyles} ${className}`;
  return (
    <button type={type ? type : "button"} className={buttonClassName} id={id} onClick={onClick}>{children}</button>
  );
};

export default ModularButton;