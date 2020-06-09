
function convertDate(newdate)
{
            const monthNames = ["January", "February", "March", "April", "May", "June",
                   "July", "August", "September", "October", "November", "December"
                     ];


            var d = new Date(newdate);
            var curr_date = d.getDate();
            var curr_month = d.getMonth() + 1; //Months are zero based
            console.log(curr_month)
            var curr_year = d.getFullYear();

            return  curr_year + "-" +curr_month+"-"+curr_date

   }

 var controls = {
                leftArrow: '<i class="fal fa-angle-left" style="font-size: 1.25rem"></i>',
                rightArrow: '<i class="fal fa-angle-right" style="font-size: 1.25rem"></i>'
            }
        $('.form-control.form-group.datepicker').datepicker(
                {
                    todayBtn: "linked",
                    clearBtn: true,
                    todayHighlight: true,
                    templates:controls

                });





function datatablecreateuserid()
{


            var columnSet = [
              {
                 title:"Id",
                 id:"id",
                 className: 'editable',
                 data:"id",
                 "visible":false,
                  type: "hidden",
               },
               {
                 title:"Client_Name",
                 id:"clientname",
                 className: 'editable',
                 data:"clientname",
                 placeholderMsg:"Client",
                 type: "select"
               },
                {
                 title:"Usergroup",
                 id:"usergroup",
                 className: 'editable',
                 data:"usergroup",
                 placeholderMsg:"Usergroup",
                 type: "text",
               },
                {
                 title:"Userid",
                 id:"userid",
                 className: 'editable',
                 data:"userid",
                 placeholderMsg:"Userid",
                 type: "text",
               },
                {
                 title:"UserType",
                 id:"usertype",
                 className: 'editable',
                 data:"usertype",
                 placeholderMsg:"usertype",
                 type: "select",
                 "options": [
                           "Client",
                           "Demo"
                          ]
               }]

                table1 = $('#datatable-createuserdetails').DataTable(
               {
                  dom: "<'row mb-3'<'col-sm-12 col-md-6 d-flex align-items-center justify-content-start'f><'col-sm-12 col-md-6 d-flex align-items-center justify-content-end'B>>" +
                                    "<'row'<'col-sm-12'tr>>" +
                                    "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
                  ajax: "/getalluser",
                  columns: columnSet,

                  select: 'single',

                  altEditor: true,
                  responsive: true,
                  buttons: [
                                {
                                    extend: 'selected',
                                    text: '<i class="fal fa-times mr-1"></i> Delete',
                                    name: 'delete',
                                    className: 'btn-primary btn-sm mr-1'
                                },
                                {
                                    extend: 'selected',
                                    text: '<i class="fal fa-edit mr-1"></i> Edit',
                                    className: 'btn-primary btn-sm mr-1',
                                    action:function(e,dt,node,config){

                                      console.log("hii")
                                      var data=table1.rows({selected: true}).data();
                                      console.log(data[0])
                                       uid=data[0]['id']

                                        $('#edituseridmodal').modal('show');
                                               clientname1.value=data[0]['clientname']
                                               displayusergroup1.value=data[0]['usergroup']
                                               userid1.value=data[0]['userid']
                                               password1.value=data[0]['password']
                                               usertype1.value=data[0]['usertype']
                                   }
                                },
                                {
                                    text: '<i class="fal fa-plus mr-1"></i> Add',
                                    className: 'btn-success btn-sm mr-1',
                                    action:function(e,dt,node,config){
                                      console.log("hii")

                                      $('#createuseridmodal').modal('show');


                                    }
                                },
                                {
                                    text: '<i class="fal fa-sync mr-1"></i> Synchronize',
                                    name: 'refresh',
                                    className: 'btn-primary btn-sm'
                                }
                           ],
                            onAddRow: function(dt, rowdata, success, error)
                            {
                                   console.log("Missing AJAX configuration for INSERT");
                                   success(rowdata);


                                },
                                onEditRow: function(dt, rowdata, success, error)
                                {
                                    console.log("Missing AJAX configuration for UPDATE");
                                    success(rowdata);

                                },
                                onDeleteRow: function(dt, rowdata, success, error)
                                {
                                    console.log("Missing AJAX configuration for DELETE");
                                     var data=table1.rows({selected: true}).data();
                                      console.log(data[0]['id']);
                                       $.ajax({ url: "/deleteuserid",
                                              type:"post",
                                              data:{"id":data[0]['id']},
                                              success: function(result){
                                              bootbox.alert(
                                                            {
                                                                message: "User has been deleted!",
                                                                size: 'small'
                                                            });
                                                table1.ajax.reload();
                                             }
                                      });

                                },
                            });

 $('#table1').on( 'click', 'tbody td', function () {
        table1.cell( this ).edit();
    } );
}


function getusergroup(){
         var clientname=document.getElementById("clientname").value
         var keyVals = {"clientname":clientname}
         var JSONval = JSON.stringify(keyVals)
         console.log(JSONval)
         $.ajax({
                                type:"post",
                                url: "/getusergroup",
                                data: JSONval,
                                success: function(res){
                                         console.log(res)
                                         var group = document.getElementById('displayusergroup');
                                         var arr=res["useg"]
                                         console.log(arr.length)
                                         for(i=0;i<arr.length;i++){
                                                    group.value = arr[i];
                                                    group.text= arr[i];


                                         }

                                    }


                        });

}


function createdatatableforuserdeatils()
{

          var columnSet = [
          {
             title:"Id",
             id:"id",
             data:"id",
             "visible":false,
              type: "hidden",
           },
           {
             title:"First_name",
             id:"fname",
             data:"fname",
             placeholderMsg:"First name",
             type: "text"
           },
            {
             title:"Last_name",
             id:"lname",
             data:"lname",
             placeholderMsg:"Last  name",
             type: "text",
           },
           {
             title: "User Email",
             id: "email",
             data: "email",
             type: "text",
             pattern: "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
             placeholderMsg: "user@domain.com",
             errorMsg: "*Invalid email - Enter valid email.",
             unique: true,
             uniqueMsg: "Email already in use"
           },
           {
             title:"Phone_number",
             id:"phone",
             data:"phone",
             placeholderMsg:"Phone Number",
             type: "text",
            },
            {
             title:"Client_name",
             id:"client",
             data:"client",
             placeholderMsg:"Client Name",
             type: "text",
           },
            {
             title: "Trial start date",
             id: "trialstartdate",
             data: "trialstartdate",
             type: "date",
             pattern: "((?:19|20)\d\d)-(0?[1-9]|1[012])-([12][0-9]|3[01]|0?[1-9])",
             placeholderMsg: "yyyy-mm-dd",
             errorMsg: "*Invalid date format. Format must be yyyy-mm-dd"
            },
           {
             title: "Trial end date",
             id: "trialenddate",
             data: "trialenddate",
             type: "date",
             pattern: "((?:19|20)\d\d)-(0?[1-9]|1[012])-([12][0-9]|3[01]|0?[1-9])",
             placeholderMsg: "yyyy-mm-dd",
             errorMsg: "*Invalid date format. Format must be yyyy-mm-dd"
            },
            {
             title:"City",
             id:"city",
             data:"city",
             placeholderMsg:"City",
             type: "text",
           },
            {
             title:"Pincode",
             id:"pincode",
             data:"pincode",
             placeholderMsg:"Pincode",
             type: "text",
           },
            {
             title:"Address",
             id:"address",
             data:"address",
             placeholderMsg:"Address",
             type: "text",
           },
           {
             title:"AddressNotes",
             id:"addressnotes",
             data:"addressnotes",
             placeholderMsg:"Address Notes",
             type: "text",
           },
            {
             title:"Usergroup",
             id:"usergroup",
             data:"usergroup",
             placeholderMsg:"UserGroup",
             type: "text",
           },
            {
              title: "Usertype",
              id: "usertype",
              data: "usertype",
              type: "select",
              "options": [
                       "Client",
                       "Pitch",
                       "Demo",
                         ]
            },
             {
              title: "RequestedBy",
              id: "RequestedBy",
              data: "RequestedBy",
              type: "select",
              "options": [
                       "Uday",
                       "Suren",
                       "Riddhi",
                       "Gowry"
                         ]
            },
           {
             title: "Contract start date",
             id: "contractstartdate",
             data: "contractstartdate",
             type: "date",
             pattern: "((?:19|20)\d\d)-(0?[1-9]|1[012])-([12][0-9]|3[01]|0?[1-9])",
             placeholderMsg: "yyyy-mm-dd",
             errorMsg: "*Invalid date format. Format must be yyyy-mm-dd"
           },
           {
             title: "Contract end date",
             id: "contractenddate",
             data: "contractenddate",
             type: "date",
             pattern: "((?:19|20)\d\d)-(0?[1-9]|1[012])-([12][0-9]|3[01]|0?[1-9])",
             placeholderMsg: "yyyy-mm-dd",
             errorMsg: "*Invalid date format. Format must be yyyy-mm-dd"
           },
           {
             title:"Volume Limit",
             id:"volumelimit",
             data:"volumelimit",
             placeholderMsg:"Volume Limit",
             type: "text",
           },
            {
              title: "Client Type",
              id: "clienttype",
              data: "clienttype",
              type: "select",
              "options": [
                       "Direct",
                       "Agency"

                         ]
            },
          {
              title: "ORM Client",
              id: "ormclient",
              data: "ormclient",
              type: "select",
              "options": [
                       "Yes",
                       "No"

                      ]
            },
             {
             title:"No of Users",
             id:"users",
             data:"users",
             placeholderMsg:"No of Users",
             type: "text",
           },
            {
             title:"No of Topics",
             id:"topics",
             data:"topics",
             placeholderMsg:"No of Topics",
             type: "text",
           }]

           table = $('#datatable-adduserdetails').DataTable(
           {
              dom: "<'row mb-3'<'col-sm-12 col-md-6 d-flex align-items-center justify-content-start'f><'col-sm-12 col-md-6 d-flex align-items-center justify-content-end'B>>" +
                                "<'row'<'col-sm-12'tr>>" +
                                "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
              ajax: "/getalluserdetails",
              columns: columnSet,

              select: 'single',

              altEditor: true,
              responsive: true,
              buttons: [
                            {
                                extend: 'selected',
                                text: '<i class="fal fa-times mr-1"></i> Delete',
                                name: 'delete',
                                className: 'btn-primary btn-sm mr-1'
                            },
                            {
                                extend: 'selected',
                                text: '<i class="fal fa-edit mr-1"></i> Edit',
                                className: 'btn-primary btn-sm mr-1',
                                action:function(e,dt,node,config){
                                  console.log("hii")
                                  var data=table.rows({selected: true}).data();
                                  console.log(data[0])
                                   id=data[0]['id']
                                   $('#edituserdetailsmodal').modal('show');
                                   fname1.value=data[0]['fname']
                                   lname1.value=data[0]['lname']
                                   email1.value=data[0]['email']
                                   phone1.value=data[0]['phone']
                                   client1.value=data[0]['client']
                                   trialstartdate1.value=data[0]['trialstartdate']
                                   trialenddate1.value=data[0]['trialenddate']
                                   trialenddate1.value=data[0]['trialenddate']
                                   city1.value=data[0]['city']
                                   pincode1.value=data[0]['pincode']
                                   address1.value=data[0]['address']
                                   addressnotes1.value=data[0]['addressnotes']
                                   usergroup1.value=data[0]['usergroup']
                                   dropdown11.value=data[0]['usertype']
                                   dropdown21.value=data[0]['RequestedBy']
                                   contract_start_date1.value=data[0]['contractstartdate']
                                   contract_end_date1.value=data[0]['contractenddate']
                                   volume_limit1.value=data[0]['volumelimit']
                                   dropdown31.value=data[0]['clienttype']
                                   dropdown41.value=data[0]['ormclient']
                                   no_of_users1.value=data[0]['users']
                                   Topics1.value=data[0]['topics']



                                }
                            },
                            {
                                text: '<i class="fal fa-plus mr-1"></i> Add',
                                className: 'btn-success btn-sm mr-1',
                                 action:function(e,dt,node,config){
                                  console.log("hii")

                                  $('#adduserdetailsmodal').modal('show');
                                }
                            },
                            {
                                text: '<i class="fal fa-sync mr-1"></i> Synchronize',
                                name: 'refresh',
                                className: 'btn-primary btn-sm'
                            }
                       ],
                        onAddRow: function(dt, rowdata, success, error)
                        {
                                console.log("Missing AJAX configuration for INSERT");
                                success(rowdata);


                            },
                            onEditRow: function(dt, rowdata, success, error)
                            {
                                console.log("Missing AJAX configuration for UPDATE");
                                success(rowdata);

                            },
                            onDeleteRow: function(dt, rowdata, success, error)
                            {
                                console.log("Missing AJAX configuration for DELETE");
                                 var data=table.rows({selected: true}).data();
                                  console.log(data[0]['id']);
                                   $.ajax({ url: "/deleteuser",
                                          type:"post",
                                          data:{"id":data[0]['id']},
                                          success: function(result){
                                           bootbox.alert(
                                                {
                                                    message: "User has been deleted!",
                                                    size: 'small'
                                                });
                                            table.ajax.reload();
                                  }})

                            },
                        });

         setInterval(function(){

         });
}



function adduserdetails()
{
      var fname=document.getElementById("fname").value
      var lname=document.getElementById("lname").value
      var email=document.getElementById("email").value
      var phone=document.getElementById("phone").value
      var client=document.getElementById("client").value
      var trial_start_date=document.getElementById("trialstartdate").value
      trial_start_date=convertDate(trial_start_date)
      console.log(trial_start_date)
      var trial_end_date=document.getElementById("trialenddate").value
      trial_end_date=convertDate(trial_end_date)

      var city=document.getElementById("city").value
      var pincode=document.getElementById("pincode").value
      var address=document.getElementById("address").value
      var addressnotes=document.getElementById("addressnotes").value
      var usergroup=document.getElementById("usergroup").value
      var usertype=document.getElementById("dropdown1").value

      var RequestedBy=document.getElementById("dropdown2").value

      var contract_start_date=document.getElementById("contract_start_date").value
      contract_start_date=convertDate(contract_start_date)
      var contract_end_date=document.getElementById("contract_end_date").value
      contract_end_date=convertDate(contract_end_date)
      var volume_limit=document.getElementById("volume_limit").value
      var client_type=document.getElementById("dropdown3").value

      var orm=document.getElementById("dropdown4").value

      var no_of_users = document.getElementById("no_of_users").value
      var no_of_topics = document.getElementById("Topics").value
      console.log("jhj")
      var pattern = /^[0-9]{10}$/;
            isphonevalid = pattern.test(phone)
            if(!isphonevalid != false){

          	    alert("Invalid phone")
          	    return false;
          	}
            var keyVals = {"fname" : fname , "lname" : lname, "email" : email , "phone" : phone ,"client":client, "trial_start_date" : trial_start_date ,
                                "trial_end_date" : trial_end_date , "city" : city , "pincode" : pincode , "address" : address , "addressnotes" :addressnotes,
                                 "Usergroup":usergroup,"UserType":usertype,"RequestedBy":RequestedBy, "contract_start_date":contract_start_date,
                                 "contract_end_date":contract_end_date, "volume_limit":volume_limit,"client_type":client_type,"orm":orm,"no_of_users":no_of_users,"no_of_topics":no_of_topics}
            var JSONval = JSON.stringify(keyVals)
            console.log(JSONval)
            var usergroup;
                 $.ajax({
						type:"post",
						url: "/userdetail",
						data: JSONval,
						success: function(res){
                                    str1="success"
                                    if(res === str1){
                                        bootbox.alert(
                                                {
                                                    message: "User has been entered!",
                                                    size: 'small'

                                                });
                                    }
                                    else{
                                        bootbox.alert(
                                                {
                                                    message: "User alredy exists!",
                                                    size: 'small'
                                                });
                                    }
                                    table.ajax.reload();
					    }

                });

           //createdatatableforuserdeatils()
  }


function editDetails()
{
      var fname=document.getElementById("fname1").value
      var lname=document.getElementById("lname1").value
      var email=document.getElementById("email1").value
      var phone=document.getElementById("phone1").value
      var client=document.getElementById("client1").value
      var trial_start_date=document.getElementById("trialstartdate1").value
      var trial_end_date=document.getElementById("trialenddate1").value
      var city=document.getElementById("city1").value
      var pincode=document.getElementById("pincode1").value
      var address=document.getElementById("address1").value
      var addressnotes=document.getElementById("addressnotes1").value
      var usergroup=document.getElementById("usergroup1").value
      var usertype=document.getElementById("dropdown11").value

      var RequestedBy=document.getElementById("dropdown21").value

      var contract_start_date=document.getElementById("contract_start_date1").value
      var contract_end_date=document.getElementById("contract_end_date1").value
      var volume_limit=document.getElementById("volume_limit1").value
      var client_type=document.getElementById("dropdown31").value

      var orm=document.getElementById("dropdown41").value

      var no_of_users = document.getElementById("no_of_users1").value
      var no_of_topics = document.getElementById("Topics1").value
                 $.ajax({
						type:"post",
						url: "/editdetails",
						data: {"id":id,"fname" : fname , "lname" : lname, "email" : email , "phone" : phone ,"client":client, "trial_start_date" : trial_start_date ,
                                "trial_end_date" : trial_end_date , "city" : city , "pincode" : pincode , "address" : address , "addressnotes" :addressnotes,
                                 "Usergroup":usergroup,"UserType":usertype,"RequestedBy":RequestedBy, "contract_start_date":contract_start_date,
                                 "contract_end_date":contract_end_date, "volume_limit":volume_limit,"client_type":client_type,"orm":orm,"no_of_users":no_of_users,"no_of_topics":no_of_topics},
						success: function(res1){

								 bootbox.alert(
                                                {
                                                    message: "Updated!",
                                                    size: 'small'

                                                });
                            table.ajax.reload();
					    }
                });

}


function edituserid()
{
            var usergroup=document.getElementById("displayusergroup1").value
            var Userid=document.getElementById("userid1").value
            var Password=document.getElementById("password1").value
            var Usertype=document.getElementById("usertype1").value
            var Clientname=document.getElementById("clientname1").value

            var keyVals = {"id":uid,"usergroup" : usergroup , "userid":Userid, "password" : Password , "usertype" : Usertype , "clientname" : Clientname }

            var jsonVals = JSON.stringify(keyVals)


              $.ajax({
						type:"post",
						url: "/edituserid",
						data: keyVals,
						success: function(res){

								 bootbox.alert(
                                                {
                                                    message: "Updated!",
                                                    size: 'small'
                                                });
                               table1.ajax.reload();
							}

                   });



}



function adduserid()
{
           var usergroup=document.getElementById("displayusergroup").value
            var Userid=document.getElementById("userid").value
            var Password=document.getElementById("password").value
            var Usertype=document.getElementById("usertype").value
            var Username=document.getElementById("clientname").value

            var keyVals = {"usergroup" : usergroup , "userid":Userid, "password" : Password , "usertype" : Usertype , "clientname" : Username }

            var jsonVals = JSON.stringify(keyVals)


              $.ajax({
						type:"post",
						url: "/adduserid",
						data: keyVals,
						success: function(res){
							str1="success"
							if(res === str1){
								 bootbox.alert(
                                                {
                                                    message: "User has been entered!",
                                                    size: 'small'
                                                });
							}
							else{
								 bootbox.alert(
                                                {
                                                    message: "User already exists!",
                                                    size: 'small'
                                                });
							}
							table1.ajax.reload();
					    }
                   });


}

