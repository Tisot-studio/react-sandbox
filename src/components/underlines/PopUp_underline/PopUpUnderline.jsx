import './pop-up-underline.scss';

const PopUpUnderline = ({children, ...otherProps})=> (
    <div className='pop-up-underline' {...otherProps}>
        {children}
        <div className='underline'></div>
    </div>
)


export default PopUpUnderline;