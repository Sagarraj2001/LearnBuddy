import React from 'react'

export default function Accordion(props) {
    return (
        <>
              <div style={{marginLeft:"50px",marginRight:"50px", zIndex: "-1"}}>

                  <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={props.target} aria-expanded="false" aria-controls={props.close}>
                                <h6>{props.header}</h6>
                            </button>
                        </h2>
                        <div id={props.targetId} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">{props.description}</div>
                        </div>
                    </div>
                </div>
              </div>
        
        </>
    )
}
