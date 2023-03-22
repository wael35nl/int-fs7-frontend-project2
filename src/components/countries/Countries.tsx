import {useEffect} from 'react';

import { useAppDispatch } from '../../app/hooks';
import { getAllCountries } from '../../services';
import { CountriesT } from '../../types/Countries';
import Country from './Country';

import style from '../../module.css/countries.module.css';

type CountriesProps = {
    countries: CountriesT[]
  }

const Countries = ({countries}: CountriesProps) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllCountries())
    }, [dispatch]);

    return (
        <table className={style.countries__table}>
            <thead>
                <tr>
                    <th>Flag</th>
                    <th>Name</th>
                    <th>Region</th>
                    <th>Population</th>
                    <th>Languages</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <Country countries={countries}/>
        </table>
    );
}

export default Countries;