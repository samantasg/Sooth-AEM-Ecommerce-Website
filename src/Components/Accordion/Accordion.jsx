import React, {useState} from "react";

const Accordion = () => {
    const [isActive, setIsActive] = useState(false);

    const accordionData = {
      title: 'Item 1',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
        laborum cupiditate possimus labore, hic temporibus velit dicta earum
        suscipit commodi eum enim atque at? Et perspiciatis dolore iure
        voluptatem.`
    };
  
    const { title, content } = accordionData;
  
    return (
      <React.Fragment>
      <div className="accordion">
        <div className="accordion-item">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div>{title}</div>
          <div>{isActive ? '-' : '+'}</div>
        </div>
          {isActive && <div className="accordion-content">{content}</div>}
        </div>
    </div>
      </React.Fragment>
    );
  };
  
  export default Accordion;