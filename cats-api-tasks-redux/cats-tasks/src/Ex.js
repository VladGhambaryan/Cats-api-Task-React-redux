import {Link, Route, Router, Routes, useLocation} from "react-router-dom";
import styles from "./App.module.scss";
import {Navigate} from "./Navigate";
import {useEffect, useState} from "react";

const BASE_URL = 'https://api.thecatapi.com/v1';

const Ex = () => {
    const [categories, setCategory] = useState([])
    const params = useLocation()
    const paramsID = Number(params.pathname.replace('/', ''))
    useEffect(() => {

        fetch(`${BASE_URL}/categories`)
            .then((res) => res.json())
            .then((json) => {
                setCategory(json)
            })
    }, [])
    return<>

        <nav>
            {categories?.map(item => {
                return (
                    <Link
                        className={(paramsID === item.id) ? `${styles.active} ${styles.link}` : styles.link}
                        key={item.id}
                        to={`/${item.id}`}
                    >
                        {item.name}
                    </Link>
                )
            })}
        </nav>
        <div className='App'>
            <Routes>

                <Route
                    path='/:id'
                   element={<Navigate paramsId={paramsID}/>}/>
                <Route path='/'element={<Navigate paramsId={paramsID}/>}/>
            </Routes>
            </div>

    </>


}

export default Ex