import React, { useEffect, useState } from 'react';
import Select from 'react-select'

import { createShoe, updateShoe, deleteShoe } from '../../api/shoe_api';
import { singleColourStyles, multiColourStyles } from '../../util/pickerStyles';

const AdminForm = ({ shoe, setShoe }) => {
    const [brand, setBrand] = useState('');
    const [name, setName] = useState('');
    const [style, setStyle] = useState('');
    const [pcolor, setPcolor] = useState('');
    const [url, setUrl] = useState('');
    const [photo, setPhoto] = useState();


    const styles = [
        { value: 'high-top', label: 'High-top' },
        // { value: 'white', label: 'White' },
        { value: 'low-top', label: 'Low-top' },
    ]

    const colors = [
        { color: 'black', label: 'Black' },
        { color: 'white', label: 'White' },
        { color: 'red', label: 'Red' },
    ]

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
        formData.append('shoe[style]', style.value);
        formData.append('shoe[pcolor]', pcolor.color);
        formData.append('shoe[url]', url);
        formData.append('shoe[photo]', photo);

        if (shoe) {
            formData.append('shoe[id]', shoe.id);
            updateShoe(formData, shoe.id)
                .then(res => console.log(res))
                .fail(err => console.log(err))
        } else {
            createShoe(formData)
                .then(res => setShoe(res))
                .fail(err => console.log(err))
        }
    }

    const handleDelete = () => {
        deleteShoe(shoe.id).then(() => setShoe())
    }

    useEffect(() => {
        setBrand(shoe ? shoe.brand : '');
        setName(shoe ? shoe.name : '');
        setStyle(shoe ? shoe.style : '');
        setPcolor(shoe ? shoe.pcolor : '');
        setUrl(shoe ? shoe.url : '');
        // setPhoto(shoe ? shoe.brand : '');
    }, [shoe])

    return (
        <div className="admin-form-container">
            <h1>{ shoe ? 'Edit Sneaker' : 'Add Sneaker'}</h1>

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
                    <Select 
                        onChange={(choice) => setStyle(choice.val)} 
                        options={styles} 
                        value={style} />
                </label>
                <label>PColor
                    <Select 
                        onChange={(choice) => setPcolor(choice.val)} 
                        options={colors} 
                        // styles={multiColourStyles}
                        // isMulti
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
                   { shoe ? 'Edit Shoe' : 'Add Shoe' }
                </button>

                { shoe && 
                    <button
                        onClick={handleDelete} 
                        title="Delete Shoe" 
                        type='submit'>
                        Delete Shoe
                    </button>
                }   
            </div>
        </div>
    )
}

export default AdminForm;