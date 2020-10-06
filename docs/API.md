Entity API:
 
https://api.uat.mq.edu.au/ws/rest/cms/cms_course/{id}
https://api.uat.mq.edu.au/ws/rest/cms/cms_designated_minor/{id}
https://api.uat.mq.edu.au/ws/rest/cms/cms_major/{id}
https://api.uat.mq.edu.au/ws/rest/cms/cms_minor/{id}
https://api.uat.mq.edu.au/ws/rest/cms/cms_pg_specialisation/{id}
https://api.uat.mq.edu.au/ws/rest/cms/cms_ug_specialisation/{id}
https://api.uat.mq.edu.au/ws/rest/cms/cms_unit/{id}


### API Parameters

Cl_id : This is the primary identifier for the academic item and would always be unique for each academic item 

(or)

combination of Code Year : Return only the single latest version (based on the minor version) for that particular implementation year for the given code. This particular version can be of any status.
 
Eg: https://api.uat.mq.edu.au/ws/rest/cms/cms_designated_minor?code=P000095&year=2020
 
List API:
 
https://api.uat.mq.edu.au/ws/rest/cms/listcourses/{imp_year}
https://api.uat.mq.edu.au/ws/rest/cms/listdesignatedminors/{imp_year}
https://api.uat.mq.edu.au/ws/rest/cms/listmajors/{imp_year}
https://api.uat.mq.edu.au/ws/rest/cms/listminors/{imp_year}
https://api.uat.mq.edu.au/ws/rest/cms/listpgspecialisations/{imp_year}
https://api.uat.mq.edu.au/ws/rest/cms/listugspecialisations/{imp_year}
https://api.uat.mq.edu.au/ws/rest/cms/listunits/{imp_year}
 
## API Parameters
 
Parameter Name

Description

Default behaviour without parameters

Implementation-year is a mandatory parameter to be given.

Status and code are optional parameters

 

If no optional parameter is specified, only the latest version (based on the minor version) for that particular implementation year must be returned. This particular version can be of any status

status

If specified as “all”, all the active,inactive, archived and discontinued versions would be returned.

If status = all, all  versions (with all statuses) are returned

 

If status = active, only active versions are returned

If status = inactive, only inactive versions are returned

If status = archived, only archived versions are returned

If status = discontinued, only discontinued versions are returned

code

If specified would get the academic item for that code. This can be used in conjunction with the “status”
 
Eg:
https://api.uat.mq.edu.au/ws/rest/cms/listugspecialisations/2020
https://api.uat.mq.edu.au/ws/rest/cms/listugspecialisations/2020?code=Q000002&status=active