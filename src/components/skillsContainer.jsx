


const SkillsContainer = ({stackName, skillsItem}) => {

    const usecssDef = stackName === 'Data Stack' ? 'md:col-span-2' : '';
    const innerGridCol = stackName === 'Data Stack' ? 'grid-cols-3' : 'grid-cols-2';
    

    return(
        <div className={`col-span-1 ${usecssDef} shadow-sm shadow-gray-400 rounded-md p-4`}>
            <h2 className='py-2'>{stackName}</h2>
            <div className={`grid grid-cols-2 ${innerGridCol}`}> 
                {
                    skillsItem.map((item, index) => (
                        <div key={index} className='p-4 rounded-md hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className='m-auto'>
                                    {item.icon}
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>{item.tool}</h3>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SkillsContainer;