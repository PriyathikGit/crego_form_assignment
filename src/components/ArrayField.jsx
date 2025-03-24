import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
// Custom Array Field Template
export const CustomArrayFieldTemplate = (props) => {
    return (
        <div>
            {props.items.map((element) => (
                <div key={element.key} className="array-item mb-3">
                    <div className="d-flex align-items-center">
                        {element.children}
                        <button
                            onClick={element.onDropIndexClick(element.index)}
                            className="btn btn-danger btn-sm ms-4 mb-4"
                        >
                            <FontAwesomeIcon icon={faTrash} /> Remove
                        </button>
                    </div>
                </div>
            ))}
            <button
                onClick={props.onAddClick}
                className="btn btn-success btn-sm mt-2 mb-2"
            >
                <FontAwesomeIcon icon={faPlus} /> Add {props.title}
            </button>
        </div>
    );
};


