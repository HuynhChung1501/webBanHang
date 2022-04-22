import React from 'react'
import { FAKE_PRODUCT_LIST } from "./fake-data"

const getAll = () => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(FAKE_PRODUCT_LIST)
        }, 50);
    })

}

export default {getAll}