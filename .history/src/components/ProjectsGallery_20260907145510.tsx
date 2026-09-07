 <div className='w-full lg:w-1/2 flex flex-col gap-4'>
                    
                    {/* Title */}
                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight'>
                        {title}
                    </h1>

                    {/* Tech Stack Tags */}
                    <div className='flex flex-wrap gap-2'>
                        {tech.slice(0, 4).map((t, idx) => (
                            <span 
                                key={idx} 
                                className='text-[10px] uppercase tracking-widest bg-white/10 text-gray-300 px-3 py-1.5 rounded-md border border-white/5 hover:bg-white/20 transition-all duration-300'
                            >
                                {t}
                            </span>
                        ))}
                        {tech.length > 4 && (
                            <span className='text-[10px] uppercase tracking-widest bg-white/5 text-gray-500 px-3 py-1.5 rounded-md border border-white/5'>
                                +{tech.length - 4}
                            </span>
                        )}
                    </div>

                  

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 mt-2">
                        {githubLink && (
                            <a
                                href={githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 text-xs md:text-sm font-medium border border-white/10"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12" />
                                </svg>
                                Source Code
                            </a>
                        )}
                        {url && (
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all duration-300 text-xs md:text-sm font-medium shadow-lg hover:shadow-xl"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>