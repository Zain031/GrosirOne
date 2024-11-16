import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCountryById } from "../../redux/feature/CountrySlice";

const DetailCountry = () => {
    const detail = useSelector((state) => state.country.countryByName);
    console.log("🚀 ~ DetailCountry ~ detail:", detail);

    const { name } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCountryById(name));
    }, [dispatch, name]);

    return <div>_details</div>;
};

export default DetailCountry;
