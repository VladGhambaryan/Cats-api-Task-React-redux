import {useEffect, useState} from "react";
import styles from './Navigate.module.scss'
import {connect} from "react-redux";

const IMG_URL = "https://api.thecatapi.com/v1/images/search?limit=10&page=1"
const RANDOM_URL = "https://api.thecatapi.com/v1/images/search?limit=10&page=1"

export const Navigate = ({paramsId}) => {

    const [data, setData] = useState([])

    const loadMore = () => {
        if (!paramsId) {
            fetch(`${RANDOM_URL}`)
                .then((resp) => resp.json())
                .then((res) => {
                    setData((prev) => [...prev, ...res])
                })
            return
        }
        fetch(`${IMG_URL}&category_ids=${paramsId}`)
            .then((resp) => resp.json())
            .then((res) => {
                setData((prev) => [...prev, ...res])
            })
    }
    const getImg = () => {
        if (!paramsId) {

            fetch(`${RANDOM_URL}`)
                .then((resp) => resp.json())
                .then((res) => {
                    setData(res)
                })
            return
        }
        fetch(`${IMG_URL}&category_ids=${paramsId}`)
            .then((resp) => resp.json())
            .then((res) => {
                setData(res)
            })
    }

    useEffect(() => {
        getImg(paramsId);
    }, [paramsId])

    return (
        <div className={styles.navigate}>
            <div className={styles.gridContainer}>
                {data?.map((item, index) => {
                    return (
                        <div key={index}
                             className={styles.gridItem}>
                            <img
                                className={styles.box}
                                src={item.url}
                                alt='#'/>
                        </div>
                    )
                })}
            </div>
            <button className={styles.btn} onClick={loadMore}>Load more</button>
        </div>
    )
}
