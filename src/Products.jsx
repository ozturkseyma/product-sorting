import React, { useState } from 'react'
import { productsData } from './data/productsData'

function StateSample5() {

    const [products, setproducts] = useState(productsData);

    const deleteProduct = (id) => {

        var result = window.confirm("Want to delete?");
        if (result) {
            var filteredProducts = products.filter(q => q.id !== id);
            setproducts([...filteredProducts])
        }
    }
    function sortProducts() {
        const newProducts = products.reverse((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
        setproducts([...newProducts])

    }
    return (<>
        <h1>Length: {products.length}</h1>
        <table className='w3-table w3-striped'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th onClick={() => sortProducts()}>Name</th>
                    <th>Unit Price</th>
                    <th>Stock</th>
                    <th>Per Unit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(item => {
                        return <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.unitPrice}</td>
                            <td>{item.unitsInStock}</td>
                            <td>{item.quantityPerUnit}</td>
                            <td><button onClick={() => deleteProduct(item.id)} className='w3-button w3-red'>Delete</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
    )
}

export default StateSample5