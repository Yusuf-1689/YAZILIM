

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';


const SongDetails = () => {
  const { songid } = useParams();

  return <div>SongDetails</div>
}

export default SongDetails;
