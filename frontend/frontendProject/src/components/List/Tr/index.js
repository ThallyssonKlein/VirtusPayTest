import React, { useState } from 'react';

import styles from '../table.module.css';
import Td from '../Td';

export default function Tr({address}){
    const [deleted, setDeleted] = useState(false);

    if(!deleted){
        return <tr className={styles.tr} key={address.id}>
                    <Td attr={"address"}
                        address={address}/>
                    <Td attr={"cep"}
                        address={address}/>
                    <Td attr={"delete"} id={address.cep} setDeleted={setDeleted}/>
            </tr>
    }else{
        return <div></div>
    }
}