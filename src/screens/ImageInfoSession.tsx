import React from 'react';
import hourseMouthInfo from "../assets/hourse_mouth_info.png"
import startUpImage from "../assets/start_up_india_logo.png"
import hactchery from "../assets/bennett_hactchery_logo.png"
import styles from "../styles/ImageInfoSession.module.css"
function ImageInfoSession() {
    return (
        <div className={styles.root}>
            <img alt="Image" width="80%" height="80%" src={hourseMouthInfo} />
            <div className={styles.supportingBrands}>
                <img alt="Image" width="30%" src={startUpImage} />
                <img alt="Image" height="30%" width="30%" src={hactchery} />
            </div>
        </div>
    );
}

export default ImageInfoSession;