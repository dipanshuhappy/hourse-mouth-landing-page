import { Box, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import MentorsCard from '../components/MentorsCard';
import { MentorInterface } from '../models/MentorInterface';
import styles from "../styles/TopMentors.module.css"
import anuj from "../assets/anuj.png"
import mehta from "../assets/metha.png"
import rao from "../assets/rao.png"
function TopMentors() {
    const [topMentors] = useState<MentorInterface[]>([
        {
            name: "Anuj Shah",
            collegeName: "University of Waterloo",
            branch: "Bachelor's",
            specialization: "STEM",
            type: "Student",
            avatar: anuj
        },
        {
            name: "Jainam Mehta",
            collegeName: "University of Manchester",
            branch: "Master's",
            specialization: "Social Sciences",
            type: "Student",
            avatar: mehta
        },
        {
            name: "Advait Rao",
            collegeName: "University of Auckland",
            branch: "Bachelor's",
            specialization: "STEM",
            type: "Alumnus",
            avatar: rao
        }
    ])
    return (
        <Box className={styles.root}>
            <div>
                <p className={styles.title}>Top Mentors</p>
            </div>
            <div className={styles.cards}>
                {
                    topMentors.map(
                        mentor => (
                            <MentorsCard {...mentor} />
                        )
                    )
                }
            </div>
        </Box>
    );
}

export default TopMentors;