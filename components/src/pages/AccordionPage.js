import Accordion from "../components/Accordion";

function AccordionPage() {
    const items1 = [
        {
            label: 'Click here',
            content: 'Here is more info. Here is more info.Here is more info.Here is more info.Here is more info.',
            id: 1,
        },
        {
            label: 'Click here 2',
            content: 'Here is more info. Here is more info. Here is more info.Here is more info. Here is more info.',
            id: 2,
        },
        {
            label: 'Click here 3',
            content: 'Here is more info. Here is more info. Here is more info. Here is more info.',
            id: 3,
        },
    ]

    return <div><Accordion items={items1}/></div>
};

export default AccordionPage;