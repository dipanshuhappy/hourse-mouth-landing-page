import { makeStyles } from "@material-ui/styles";
export default  useStyles = makeStyles(()=>({
    root: {
        display:"flex",
        justifyContent:"space-between",
        margin:"32px",
        marginTop:"4px"
    },
    img:{
        height:"64px"
    },
    buttonContainer:{
        alignSelf:"center"
    },
    button:{
        borderRadius:"8px",
        padding:"8px",
    }
})
);