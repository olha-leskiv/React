import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (index) => {
        expandedIndex === index ? setExpandedIndex(-1) : setExpandedIndex(index);
    }

    const renderedItems = items.map((item, index) => {
        const isExpaned = index === expandedIndex;

        const icon = <span>{isExpaned ? <GoChevronDown /> : <GoChevronLeft />}</span>

        return (
            <div key={item.id}>
                <div className="flex justify-between p-3 bg-gray-50 border-b items-center" onClick={() => handleClick(index)}>{item.label}{icon}</div>
                {isExpaned && <div className="border-b p-5">{item.content}</div>}
            </div>
        );
    });

    return <div className='border-x border-t rounded'>{renderedItems}</div>
}

export default Accordion;  
 
