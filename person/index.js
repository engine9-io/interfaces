{
	let o={
        object:"person",
		label:"Person",
        plural:"People",
		description:"Core Person Object",
        layouts:{
            list:{
                components:{
                    table:{
                        component:"DataTable",
                        object:'person',
                        fields:[
                            given_name,
                            family_name,
                            created_at,
                            modified_at
                        ],
                        conditions:[{fql:"length(acquisition_source)>0"}],
                        order_by:{fql:"sum(acquisition_cost)",order_by_direction:"DESC"},
                        limit:50,
                        columns:[
                            {label:"Name",render:
                            {label:"Date Created",sql:"",format:"date"}
                        ]
                    }
                }
            },
            edit:{
                components:{
                    form:{
                    }
                }
            }
        }
		
	};
	module.exports=o;
}
