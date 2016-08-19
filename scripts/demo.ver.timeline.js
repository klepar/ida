

function changeDemo(type, is_mobile) {
    $('#timeline-1').remove();
    var wrapper = $('<div>').attr('id', 'timeline-1').appendTo($(document.body));

    if (is_mobile) {
        wrapper.addClass('mobile');
    }

    var timeline_data = [];
    var options       = {};

    $('#timeline-1').addClass('demo');

            timeline_data = [
        
				{
				
				type:     'blog_post',
date: '2013-12-30',
title: 'Podarowaliśmy Martynie wymarzony pokój na święta!',
content: 'Przedświąteczny okres, oprócz szaleństwa zakupowego i szykowania pyszności na wigilijne stoły, to przede wszystkim czas, aby dzielić się z innymi dobrą energią. Dlatego tuż przed świętami Energetyczne Centrum SA spełniło kolejne marzenie podopiecznej',
readmore: 'http://www.ec.net.pl/o-nas/aktualnosci/podarowalismy-martynie-wymarzony-pokoj-na-swieta-_68.html#ad-image-0"',
width: 300,
				},


{
type:     'blog_post',
date: '2013-09-30',
title: 'Energetyczne Centrum nagrodzone! - Relacja z gali Lider Regionu 2013',
content: 'W minioną sobotę na gali „Lider Regionu” Energetyczne Centrum zostało uhonorowane statuetką Lidera Regionu w Kategorii Usługi! W imieniu Prezesa Zarządu Energetycznego Centrum Pana Dariusza Chlastawy nagrodę odebrała Ilona Mroczek. Już po raz siódmy ',
readmore: 'http://www.ec.net.pl/o-nas/aktualnosci/energetyczne-centrum-nagrodzone-relacja-z-gali-lider-regionu-2013_55.html#ad-image-0',
width: 300,
},



{
type:     'blog_post',
date: '2013-04-22',
title: 'Wspieramy Kobiety Przedsiębiorcze!',
content: 'W piątek, 19 kwietnia, odbyła się gala finałowa Plebiscytu Kobieta Przedsiębiorcza 2012. Energetyczne Centrum było partnerem głównym tegorocznego wydarzenia. Kobieta Przedsiębiorcza to jedyny w regionie plebiscyt wyróżniający i promujący przedsiębior',
readmore: 'http://www.ec.net.pl/o-nas/aktualnosci/wspieramy-kobiety-przedsiebiorcze-_14.html#ad-image-0',
width: 300,
},

{
type:     'blog_post',
date: '2013-02-14',
title: 'Energetyczne Centrum dołączyło do darczyńców Fundacji Mam Marzenie!',
content: 'Energetyczne Centrum z radością wspiera finansowo fundację Mam Marzenie i pomaga w spełnianiu marzeń jej podopiecznych. Fundacja Mam Marzenie rozpoczęła działalność w lutym 2004 r. i obecnie posiada 16 oddziałów w całym kraju. Pierwszą polską „marzyc',
readmore: 'http://www.ec.net.pl/o-nas/aktualnosci/energetyczne-centrum-dolaczylo-do-darczyncow-fundacji-mam-marzenie-_7.html',
width: 300,
},
{
type:     'blog_post',
date: '2012-12-31',
title: 'UOKiK. 90 tys. PLN kary dla spółki Energetyczne Centrum !',
content: 'Urząd Ochrony Konkurencji i Konsumentów nałożył 90 tys. zł kary na spółkę energetyczne Centrum, która - zdaniem Urzędu - stosowała niezgodne z prawem praktyki przy zawieraniu umów z klientami. Chodzi o brak wzoru oświadczenia o odstąpieniu od umowy.',
readmore: 'http://decyzje.uokik.gov.pl/dec_prez.nsf/xsp/.ibmmodres/domino/OpenAttachment/dec_prez.nsf/1CC2BC407F97E786C1257AF700454F66/Body/BIP%20RWA-61-23_12_DJ%20-%20Decyzja%20-%20_EC_.pdf',
width: 300
},
   
            ];
            options       = {
                animation:   true,
                lightbox:    true,
                showYear:    true,
                allowDelete: false,
                columnMode:  'dual'
            
        
    }

    var timeline = new Timeline($('#timeline-1'), timeline_data);
    timeline.setOptions(options);
    timeline.display();
}


