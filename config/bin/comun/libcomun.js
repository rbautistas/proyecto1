var jsonComun={
				setGuardar:function(req,resp,next,object,params,callback){					
				var obj=new object(req.body);				
					.save(params)
					.populate()
					.exec(
						function (err,data){
							if(err){
								callback(resp.json(err)); 
							}else{
								callback(resp.json(data));
							} 
					});
				},
				generarToken: function(data){

				},
				getGuardar:function(req,resp,next,callback){

				},
				listarParams:function(req,resp,next,callback){
				//...
				},
				setActualizar:function(req,resp,next,callback){
				//..
				},
				getActualizar:function(req,resp,next,callback){
				///...
				},
				getListarTodo:function(req,resp,next,callback){
				//...
				},
				setListarTodo :function(req,resp,next,callback){
				//..
				},
				setBorrarborrar:function(req,resp,next,callback){
				///....
				},	
				getBorrar:function(req,resp,next,callback){
				//..
				},
				getSession:function(req,resp,next,callback){
				//..
				},
				setSession : function (req,resp,next,callback){
				//..
				},
				setValidarString: function(req,resp,next,callback){
				//..
				},
				getValidarString: function(req,resp,next,callback){
				//...
				},
				setContentType: function(req,resp,next,callback){
				//....
				},
				setToken: function(req,resp,next,callback){
				//..
				},
				getToken: function(req,resp,next,callback){
				//..
				},
				getValidarSession: function(req,resp,next,callback){
				//...
				}
			};
module.exports=jsonComun;