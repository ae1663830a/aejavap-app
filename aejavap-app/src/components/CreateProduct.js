import React from 'react'

const CreateProduct = (props) => {

    const style = {
        width: '150px',
        marginTop: '5px',
        marginBottom: '5px'
    };

    return (
        <div>
            <form onSubmit={props.submitData}>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text"
                           className="form-control"
                           placeholder="Product title"
                           key={props.id}
                           value={props.title}
                           onChange={props.onFieldChange('title')}/>
                </div>
                <div className="form-group">
                    <label>Image Url</label>
                    <input type="text"
                           className="form-control"
                           placeholder="Product image URL"
                           value={props.image}
                           onChange={props.onFieldChange('image')}/>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input type="text"
                           className="form-control"
                           placeholder="Product description"
                           value={props.description}
                           onChange={props.onFieldChange('description')}/>
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input type="text"
                           className="form-control"
                           placeholder="Product price"
                           value={props.price}
                           onChange={props.onFieldChange('price')}/>
                </div>
                <div className="form-group">
                    <label>Quantity</label>
                    <input type="text"
                           className="form-control"
                           placeholder="Product quantity"
                           value={props.quantity}
                           onChange={props.onFieldChange('quantity')}
                    />
                </div>
                <input style={style} type="submit" className="btn btn-success" value="Submit"/>
            </form>
            <button style={style} className="btn btn-warning" onClick={props.cancelCreate}>Cancel</button>
        </div>
    )
};

export default CreateProduct;