import { Delete } from '@mui/icons-material';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { Link, useParams } from 'react-router-dom';
import supabase from '../config/SupabaseClient';


const Smoothies = ({ smoothie, onDelete }) => {
    const handleDelete = async () => {
        
        const { data, error } = await supabase.from('smoothies')
            .delete()
            .eq('id', smoothie.id)
            .select()
        if (data) {
            console.log(data)
            onDelete(smoothie.id)
            // alert("Item Deleted Successfully")
        }
        if (error) {
            console.log(error)
            // alert('Deletion Failed')
        }
    }


    return (
        <div className='smoothie-card'>
            <span className="rating"> {smoothie.rating}🌟</span>
            <div className='smoothie-item'>
                <p>{smoothie.title}</p>
                <img src={smoothie.image} alt="Img" />
                <div>{smoothie.method}
                    <div className="buttons">
                        <Link className="icon-btn edit-btn" to={`/menu/${smoothie.id}`}>
                            <DriveFileRenameOutlineIcon />
                        </Link>

                        <button className="icon-btn delete-btn" onClick={handleDelete}>
                            <Delete />
                        </button>
                    </div>


                </div>
            </div>
        </div >
    )
}

export default Smoothies
