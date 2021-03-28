import ChatBalloon from 'components/ChatBalloon';
import React from 'react';
import NavigationSetting from './Setting';
import useStyle from './style';

//fake data
const list = [
  {
    name: 'Sporton',
    avtUrl: '',
    from: 'Janeen',
    message:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    time: '7/11/2020',
    status: 1,
    isOnline: true,
  },
  {
    name: 'Ferriday',
    avtUrl: 'https://robohash.org/doloresutcum.png?size=50x50&set=set1',
    from: 'Dylan',
    message:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    time: '6/14/2020',
    status: 3,
    isOnline: true,
    viewedList: ['https://robohash.org/autillosunt.png?size=50x50&set=set1'],
  },
  {
    name: 'Vannikov',
    avtUrl: 'https://robohash.org/autillosunt.png?size=50x50&set=set1',
    from: 'Amil',
    message:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
    time: '11/23/2020',
    status: 0,
  },
  {
    name: 'Salway',
    avtUrl: 'https://robohash.org/quieaesse.png?size=50x50&set=set1',
    from: 'Justin',
    message:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    time: '2/27/2021',
    status: 2,
  },
  {
    name: 'Ortzen',
    avtUrl: 'https://robohash.org/quaeratfugaexcepturi.png?size=50x50&set=set1',
    from: 'Juliette',
    message:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    time: '12/4/2020',
    status: 3,
    viewedList: [
      'https://robohash.org/autillosunt.png?size=50x50&set=set1',
      // 'https://robohash.org/quieaesse.png?size=50x50&set=set1',
      'https://robohash.org/quieaesse.png?size=50x50&set=set1',
      // 'https://robohash.org/quieaesse.png?size=50x50&set=set1',
      // 'https://robohash.org/quieaesse.png?size=50x50&set=set1',
      // 'https://robohash.org/quieaesse.png?size=50x50&set=set1',
    ],
    isOnline: true,
  },
  {
    name: 'Bee',
    avtUrl: 'https://robohash.org/voluptatemautemodio.png?size=50x50&set=set1',
    from: 'Khalil',
    message:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    time: '5/5/2020',
    status: 3,
  },
  {
    name: 'Titterington',
    avtUrl:
      'https://robohash.org/officiarecusandaevoluptatum.png?size=50x50&set=set1',
    from: 'Maggie',
    message:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
    time: '5/21/2020',
    status: 2,
  },
  {
    name: 'MacCahey',
    avtUrl: 'https://robohash.org/oditquoaut.png?size=50x50&set=set1',
    from: 'Mikol',
    message:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    time: '3/10/2021',
    status: 2,
  },
  {
    name: 'Smallman',
    avtUrl: 'https://robohash.org/cumutrerum.png?size=50x50&set=set1',
    from: 'Yettie',
    message:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    time: '1/9/2021',
    status: 1,
  },
  {
    name: 'MacDougall',
    avtUrl: 'https://robohash.org/minustotameius.png?size=50x50&set=set1',
    from: 'Victoria',
    message:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    time: '12/2/2020',
    status: 2,
  },
  {
    name: 'Bakesef',
    avtUrl: 'https://robohash.org/minimaaliasut.png?size=50x50&set=set1',
    from: 'Audrye',
    message:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
    time: '12/11/2020',
    status: 0,
  },
  {
    name: 'Valencia',
    avtUrl: 'https://robohash.org/cumautiusto.png?size=50x50&set=set1',
    from: 'Luciano',
    message:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    time: '4/2/2020',
    status: 2,
    isOnline: true,
  },
  {
    name: 'Lude',
    avtUrl: 'https://robohash.org/ineavoluptatem.png?size=50x50&set=set1',
    from: 'Valida',
    message:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
    time: '4/14/2020',
    status: 1,
  },
  {
    name: 'Gohier',
    avtUrl: 'https://robohash.org/omnisquipraesentium.png?size=50x50&set=set1',
    from: 'Kathie',
    message:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
    time: '10/28/2020',
    status: 2,
  },
  {
    name: 'Lipscomb',
    avtUrl: 'https://robohash.org/numquamsequieligendi.png?size=50x50&set=set1',
    from: 'Michel',
    message: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    time: '6/9/2020',
    status: 1,
  },
  {
    name: 'Wennam',
    avtUrl:
      'https://robohash.org/verotemporeexercitationem.png?size=50x50&set=set1',
    from: 'Rockwell',
    message:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    time: '10/6/2020',
    status: 0,
  },
  {
    name: 'Sleford',
    avtUrl: 'https://robohash.org/utaliquidet.png?size=50x50&set=set1',
    from: 'Gilberte',
    message:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    time: '10/9/2020',
    status: 2,
  },
  {
    name: 'Legge',
    avtUrl: 'https://robohash.org/veroautdolores.png?size=50x50&set=set1',
    from: 'Charity',
    message:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    time: '10/24/2020',
    status: 2,
  },
  {
    name: 'Minghella',
    avtUrl: 'https://robohash.org/magniiureunde.png?size=50x50&set=set1',
    from: 'Magdalena',
    message:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    time: '7/26/2020',
    status: 2,
  },
  {
    name: 'Lampard',
    avtUrl: 'https://robohash.org/istequiet.png?size=50x50&set=set1',
    from: 'Wald',
    message:
      'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    time: '1/8/2021',
    status: 3,
  },
];

function Navigation() {
  const classes = useStyle();

  return (
    <div className={`${classes.root} flex-col p-lr-16 h-100`}>
      {/* option setting chat */}
      <NavigationSetting />
      <div className={classes.chatBalloonWrap}>
        {list.map((item, index) => (
          <ChatBalloon
            key={index}
            avtUrl={item.avtUrl}
            from={item.from}
            message={item.message}
            name={item.name}
            status={item.status}
            time={item.time}
            viewedList={item.viewedList ? item.viewedList : []}
            isOnline={item.isOnline ? item.isOnline : false}
          />
        ))}
      </div>
    </div>
  );
}

export default Navigation;
