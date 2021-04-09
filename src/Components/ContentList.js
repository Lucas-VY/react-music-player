import React from 'react';

const ContentList = (props) => {
    return (
        <div className="container">
            <div className="card text-center"> 
                <div className="card-header">
                    Music Player 
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                </ul>
                <div class="container card-footer">
                    <button type="button" className="list-group-item list-group-item-action">A second item</button>
                    <button type="button" className="list-group-item list-group-item-action">A third button item</button>
                    <button type="button" className="list-group-item list-group-item-action">A fourth button item</button>
                    <button type="button" className="list-group-item list-group-item-action" disabled>A disabled button item</button>
                </div>
            </div>
        </div>


    )
}

export default ContentList