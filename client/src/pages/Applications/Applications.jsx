import React, {useEffect, useState} from 'react';
import style from './Applications.module.css'
import ApplicationCard from '../../components/ApplicationCard/ApplicationCard';
import {fetchApplications, fetchApplicationTypes} from '../../http/applicationAPI';
import {useDispatch, useSelector} from 'react-redux';
import {
  setApplicationsAC,
  setApplicationTypesAC,
  setCurrentPageApplicationAC,
  setTotalCountApplicationAC
} from '../../redux/applicationsReducer';
import Pages from '../../components/Pages/Pages';
import {FormattedMessage} from 'react-intl';
import Spinner from '../../components/Spinner/Spinner';

const Applications = () => {
  const selectedApplicationType =  useSelector(state => state.application.selectedApplicationType)
  const limit =  useSelector(state => state.application.limit)
  const applications =  useSelector(state => state.application.applications)
  const page =  useSelector(state => state.application.currentPage)
  const totalCount =  useSelector(state => state.application.totalCount)
  const [loading, setLoading] = useState(true)


  const dispatch = useDispatch()
  useEffect(() => {
    fetchApplicationTypes().then(data => {
      dispatch(setApplicationTypesAC(data))
    })
    fetchApplications(selectedApplicationType, limit, 1).then(data => {
      dispatch(setApplicationsAC(data.rows))
      dispatch(setTotalCountApplicationAC(data.count))
      dispatch(setCurrentPageApplicationAC(1))
    }).finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    setLoading(true)
    fetchApplications(selectedApplicationType, limit, page).then(data => {
      dispatch(setApplicationsAC(data.rows))
      dispatch(setTotalCountApplicationAC(data.count))
    }).finally(() => setLoading(false))
  }, [page])

  if (loading) {
    return <Spinner/>
  }

  return (
    <div className={style.applications}>
      <h1 className={style.header}><FormattedMessage id='application_title' /></h1>
      {
        applications.length === 0 ?
          <div className={style.error}>
            <div className={style.errorText}><FormattedMessage id='application_error' /></div>
          </div>
          :
          <div className={style.application}>
            {
              applications.map(apl=>(
                <ApplicationCard key={apl.id} applicationData={apl}/>
              ))}
          </div>
      }
      <Pages currentPage={page} setPage={setCurrentPageApplicationAC} limit={limit} totalCount={totalCount}/>
    </div>
  );
};

export default Applications;