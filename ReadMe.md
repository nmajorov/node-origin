Very simple nodejs  project for openshift origin
================================================ 

How-to deploy to openshift:

      oc new-project node-origin
  

Create new application:

      oc new-app https://github.com/nmajorov/node-origin -l name=node-origin
  
Get services:

        oc get svc
    
Expose the service: 

       oc expose svc/node-origin


