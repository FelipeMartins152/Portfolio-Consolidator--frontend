function Logo (props){
    return(
      <svg 
          width="64" 
          height="64" 
          viewBox="110 12 78 78" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="drop-shadow-[10_10_25px_rgba(37,99,235,0.5)]"
          {...props}
      >
          <path 
              d="M110 36C110 22.7452 120.745 12 134 12H164C177.255 12 188 22.7452 188 36V66C188 79.2548 177.255 90 164 90H134C120.745 90 110 79.2548 110 66V36Z" 
              fill="url(#paint0_linear_1_7491)" 
          />
          <path 
              d="M132 66L141.375 52L150.75 63.6667L162 45" 
              stroke="white" 
              strokeWidth="1.6" 
              strokeLinecap="round"
          />
          <path 
              d="M164.273 45.2728C166.381 45.2728 168.091 43.5634 168.091 41.4547C168.091 39.3459 166.381 37.6365 164.273 37.6365C162.164 37.6365 160.455 39.3459 160.455 41.4547C160.455 43.5634 162.164 45.2728 164.273 45.2728Z" 
              fill="#10B981"
          />
          <defs>
              <linearGradient id="paint0_linear_1_7491" x1="121.692" y1="12" x2="176.308" y2="90" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#1E3A8A"/>
                  <stop offset="0.5" stopColor="#2563EB"/>
                  <stop offset="1" stopColor="#3B82F6"/>
              </linearGradient>
          </defs>
      </svg>
    );
}

export default Logo;