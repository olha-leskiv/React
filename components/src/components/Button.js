import className from "classnames";

function Button({ children, rounded, outlined, primary, secondary, success, warning, danger, ...rest }) {

    const classes = className(rest.className, 'flex', 'items-center', 'px-3', 'py-1.5', 'border', {
        'border-blue-600 bg-blue-600 text-white': primary,
        'border-gray-600 bg-gray-600 text-white': secondary,
        'border-green-600 bg-green-600 text-white': success,
        'border-yellow-600 bg-yellow-600 text-white': warning,
        'border-red-600 bg-red-600 text-white': danger, 
        'rounded-full': rounded,
        'bg-blue-100 text-blue-600': outlined && primary,
        'bg-gray-100 text-gray-600': outlined && secondary,
        'bg-success-100 text-success-600': outlined && success,
        'bg-yellow-100 text-yellow-600': outlined && warning,
        'bg-red-100 text-red-600': outlined && danger,
    });

    return (
        <button {...rest} className={classes}>{children}</button> 
    )
}

Button.propTypes = {
        checkVariationValue: ({primary, secondary, success, warning, danger}) => {
            const count = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!danger);
            if(count > 1) {
                return new Error(`Only one "primary", "seconadary", "succes", "warning", "danger" can be true`)
            } 
        },
};

export default Button;  