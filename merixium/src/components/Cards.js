import React from 'react';
 import './Cards.css';
 import CardItem from './CardItem';

 function Cards() {
   return (
     <div className='cards'>
       <h1>Check out these EPIC links!</h1>
       <div className='cards__container'>
         <div className='cards__wrapper'>
           <ul className='cards__items'>
           <CardItem
               src='https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80'/*'../../images/img-3.jpg'*/
               text='One stop for all of my social media!'
               label='Link Tree'
               path='linktr.ee/merixium?utm_source=braze&utm_medium=email&utm_campaign=20221004_Marketing_All_Onboarding_Triggered_MultiChannel_Global_English_FeatureIntroduction&utm_content=canvas&utm_term=Day1Email1Free_CTA4'
             />
             <CardItem
               src='https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3174&q=80'/*'https://images.unsplash.com/photo-1663243749454-70b8b93d7425?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80'*//*'../../images/img-1.jpg'*/
               text='Visit my Instagram for updates!'
               label='Instagram'
               path='/services'
             />
           </ul>
           <ul className='cards__items'>
           <CardItem
               src='https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80'/*'../../images/img-2.jpg'*/
               text='Look out for lives on my TikTok!'
               label='TikTok'
               path='/services'
             />
             <CardItem
               src='https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80'/*'../../images/img-4.jpg'*/
               text='Follow my journey vlog!'
               label='YouTube'
               path='https://youtube.com/merixium'
             />
             <CardItem
               src='https://images.unsplash.com/photo-1614680376593-902f74cf0d41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80'
               text='Some rad Spotify playlists!'
               label='Spotify'
               path='/sign-up'
             />
           </ul>
         </div>
       </div>
     </div>
   );
 }

 export default Cards;