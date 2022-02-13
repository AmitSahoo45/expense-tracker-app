import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    radioGroup: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '-10px',
    },
    button: {
        marginTop: '20px',
        border: '1px solid #191919',
        borderRadius: '30em',
        padding: '10px 20px',
        position: 'relative',
        overflow: 'hidden',
        fontWeight: 'bold',
        letterSpacing: '2px',
        zindex: '1',
        "&:hover": {
            backgroundColor: '#B2EA70'
        }
    },
}));