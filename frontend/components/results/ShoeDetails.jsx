import React from 'react';

const ShoeDetails = ({ shoe, shoeLength, shoeIdx, setShoeIdx }) => {
    // const shoe = {
    //     id: 1,
    //     brand: 'nike',
    //     name: 'air force 1',
    //     pcolor: 'white',
    //     url: "https://www.amazon.com/Nike-Mens-315122-111-FORCE-Size/dp/B001NGKPE6/ref=sr_1_19?dchild=1&keywords=nike+dunks&qid=1623461762&sr=8-19",
    //     photoUrl: "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBDUT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--403ade35f4dc84528730e3e477d7eebf4533679b/white-air-force-1.jpg",
    //     style: 'low-top'
    // }

    const openInNewTab = () => {
        const newWindow = window.open(shoe.url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <div className="shoe">
            <h1>{(shoe.name + '  -  ' + shoe.brand).toUpperCase()}</h1>

            <div className="shoe-image">
                <img src={shoe.photoUrl} />
            </div>

            <div className="shoe-lower">
                <p>{shoe.style.toUpperCase()}</p>
                <p>{shoe.pcolor.toUpperCase()}</p>
            </div>

            {/* <div className="shoe-link-btn" onClick={openInNewTab}>
                <p>View</p>
            </div> */}
        </div>
    )
};

export default ShoeDetails;