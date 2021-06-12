import React, { useState } from 'react';

import { createShoe } from '../../api/shoe_api';

const AdminForm = () => {
    const [brand, setBrand] = useState('');
    const [name, setName] = useState('');
    const [style, setStyle] = useState('');
    const [pcolor, setPcolor] = useState('');
    const [url, setUrl] = useState('');
    const [photo, setPhoto] = useState();

    console.log(style);
    console.log(url);
    console.log(pcolor);
    console.log(name);
    console.log(brand);

    const update = func => {
        return e => {
            func(e.currentTarget.value);
        }
    }

    const handlePhoto = (e) => {
        setPhoto(e.currentTarget.files[0]);
    }

    const handleSubmit = () => {
        const formData = new FormData();
        formData.append('shoe[brand]', brand);
        formData.append('shoe[name]', name);
        formData.append('shoe[style]', style);
        formData.append('shoe[pcolor]', pcolor);
        formData.append('shoe[url]', url);
        formData.append('shoe[photo]', photo);

        createShoe(formData)
            .then(res => console.log(res))
            .fail(err => console.log(err))
    }

    return (
        <div className="admin-form-container">
            <h1>Add Sneaker</h1>

            <div className="admin-form">
                <label>Brand
                    <input 
                        onChange={update(setBrand)}
                        type="text" 
                        value={brand} />
                </label>
                <label>Name
                    <input 
                        onChange={update(setName)}
                        type="text" 
                        value={name} />
                </label>
                <label>Style
                    <input 
                        onChange={update(setStyle)}
                        type="text" 
                        value={style} />
                </label>
                <label>Primary Color
                    <input 
                        onChange={update(setPcolor)}
                        type="text" 
                        value={pcolor} />
                </label>
                <label>Url
                    <input 
                        onChange={update(setUrl)}
                        type="text" 
                        value={url} />
                </label>

                <label>Photo
                    <input 
                        onChange={handlePhoto}
                        type="file"/>
                </label>


                <button 
                    onClick={handleSubmit} 
                    title="Add Shoe" 
                    type='submit'>
                    Add Shoe
                </button>

            </div>
        </div>
    )
}

export default AdminForm;