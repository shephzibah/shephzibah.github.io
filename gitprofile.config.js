// gitprofile.config.js

const config = {
  github: {
    username: 'shephzibah', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 0, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'hephzibah-saidu',
    twitter: '',
    outlook: 'saidu.h@northeastern.edu',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'hephzibahsaidu7@gmail.com',
  },
  resume: {
    fileUrl:
      'Software_Engineer_HS.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java', 
    'Python', 
    'C',
    'C++',
    'JavaScript',
    'SQL',
    'PHP',
    'HTML',
    'CSS',
    'BML',
    'Swift',
    'UML',
    'Kubernetes', 
    'Docker',
    'Maven',
    'Git',
    'Jira',
    'Jenkins',
    'Oracle Agile PLM',
    'Oracle JET',
    'Postman',
    'Spring Boot',
    'Spring',
    'Apache Kafka',
    'Django',
    'Flask',
    'RESTful Web Services',
    'Keras',
    'PyTorch',
    'React JS',
    'JQuery',
    'AWS',
    'Oracle DBMS',
    'MySQL',
    'MongoDB',
    'Firebase',
    'Linux',
  ],
  experiences: [
    {
      company: 'Northeastern University',
      position: 'Graduate Teaching Assistant',
      from: 'Sep 2023',
      to: 'present',
      companyLink: 'https://www.northeastern.edu/',
    },
    {
      company: 'Nokia',
      position: 'Software Engineer Intern',
      from: 'Jan 2023',
      to: 'September 2023',
      companyLink: 'https://www.nokia.com/',
    },
    {
      company: 'Northeastern University',
      position: 'Graduate Teaching Assistant',
      from: 'Aug 2022',
      to: 'Dec 2022',
      companyLink: 'https://www.northeastern.edu/',
    },
    {
      company: 'Oracle',
      position: 'Software Developer Engineer',
      from: 'Oct 2020',
      to: 'Dec 2021',
      companyLink: 'https://www.oracle.com/',
    },
    {
      company: 'G E Appliances',
      position: 'Software Developer Intern',
      from: 'Jan 2020',
      to: 'May 2020',
      companyLink: 'https://www.geappliances.com/',
    },
    {
      company: 'Applet Constructions',
      position: 'Full stack Developer',
      from: 'Aug 2019',
      to: 'Sept 2019',
      companyLink: '',
    },
  ],
   certifications: [
    {
      name: 'Data Science and Machine Learning',
      Company: 'IBM',
      year: 'May 2019',
      link: ''
    },
  ], 
  education: [
    {
      institution: 'Northeastern University',
      degree: 'Masters Degree',
      from: '2022',
      to: '2024',
    },
    {
      institution: 'Chaitanya Bharathi Institute of Technology',
      degree: 'Bachelors Degree',
      from: '2016',
      to: '2020',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Sentiment Analysis of Hotel Reviews ',
      description:
        'Compared and Contrasted Machine Learning and Deep Learning Models which classify the tweets based on word embeddings, TF-IDF and many other features by incorporating NLP techniques. LSTM based algorithm depicted an accuracy of around 97%.',
      imageUrl: 'https://image.shutterstock.com/image-photo/customer-experience-concept-woman-hand-260nw-1576875433.jpg',
      languages: 'Python, NLP',
    },
    {
      title: 'FAKE PRODUCT DETECTION',
      description:
        'Designed and developed a dynamic web application allowing to verify if product is original or fake considering all 3, 4, 6, 8 dimensions of product based on category analyzing using image and pattern recognition with an accuracy up to 97.34%.',
      imageUrl: 'https://media.istockphoto.com/id/965803290/photo/fake-or-real-concept.jpg?s=170667a&w=0&k=20&c=0I-cc6JKF-mwZn7Qw3RavRn3CYEW9O8PpOh1tz5C7RY=',
      languages: 'Python, Flask, Machine Learning, Open CV',
    },
    {
      title: 'DISTRIBUTED CENTRALIZED CHAT BOT ',
      description:
        'Implemented a centralized chat bot using star network, where users can login and create chat rooms and can share the centralized data. DBMS queries to maintain server client data transparency across the network using sessions.',
      imageUrl: 'data:image/jpeg;base64,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',
      languages: 'Java, DBMS, Distributed Systems',
    },
    {
      title: 'LAST MILE DELIVERY ',
      description:
        'Created a web-application to enable effective collaboration between drivers and warehouse management in effective tracking using DBMS queries and optimized route by 95% calculation examining distance, time of delivery, traffic, weight. Implemented an android application to enable Consumers and product interaction to provide access to keep a track on progress of delivery.',
      imageUrl: 'data:image/jpeg;base64,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',
      languages: 'Java, React, Firebase, AngularJS, Flask, Android Studio',
    },
    {
      title: 'Candy Crush Game',
      description:
        'Capitalized on C programming language to construct a complex algorithm for an addictive game Utilized GTK to build a pleasing UI which keeps the user engaged throughout the game play.',
      imageUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhMVFRUVFRUVFRUVFRYVFRcXFxUXFhUXFRYYHSggGB0lHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGi0lICUvLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAIDBAYBBwj/xABGEAABAwIEBAMEBwcCAQ0AAAABAAIDBBEFEiExBkFRYRMicTKBkaEHI0JSscHwFGJygpKi0bLhMxUWFyQ0Q1Nzk7PC0vH/xAAcAQABBQEBAQAAAAAAAAAAAAAFAAIDBAYBBwj/xAA6EQABAwMBBQYFAwIFBQAAAAABAAIRAwQhMQUSQVFhEyJxgZHwBqGxwdEUMuFS8TNicrLCFRZCgpL/2gAMAwEAAhEDEQA/ABySSS1yw6SS6uhiSSakAnhqcGrsJhcmiNIxKzE26mMVwmkwnTIVDKnCJSuj1U9PFdOOExrpMKm6FdbCjLKK4UNRJHFv5ndG7j+I8lXq3NOkzfqGB1VyhZ1rioKdJpcTwHuAOpgDiVUjoieSc6jaNy1vqQ3/AFKOSskft5B0Zofed/wUcdCd9b8yd1mrn4ppMMUml3U4Hpk+sLX2vwa9wm4qBvRo3vmYHoD4qYMZ95nxv+SmjgjOgewHpma0/Byibh/ZNfh/ZUP+7Kk5Y31Kvn4OtAMVH+e7+B9VZfh5UD6Ejko445Y/Yc4drmx9eSv0WMi+WduX99o0/mby9R8EWtPiOhWMP7p9R64+YCD3vwnc0gXUSKg6Yd6ZnyJPRDzSlMdBZa5+GhzQ5tnNIuCDcEdQRuhVbR2R5lYO0WYqUHM1QEtXAxW3wpzYVYKqgklU8i4QrkkdlVeFwZTiYTEksq6QkuriSSSSSSSSSSSSSS6GpJLsYVuJirNardO7kUnBMDxKUkCiDUVjbfQqCop7arjXcCm1W4kKrHoVfhaqgar9C3knVBhR0n5hRzUit0FHqi1JRZgs7jWJZyYYT5Bo94+12B+7+PpuJvtpU7WkXP8AIc0f2Zsare1g1mBqTwA+55Dj0EkOxTF944D2dJ+Ufb974dUOpqP9c1NTUq1nDnD/AIxzPJDBvyv+v8e7zu6va9/WA1PAcB74lenULe22bQhggcTxJ68zy4Dgs/BR9ArraEgAkb7X0+ZW9nnpqVuWzW/utALveP8AKzGLYz4ps1mUemvvKo3dv2ODUaXchJjxOn3TaV7Vrnu0yG8yhBi6aJmTqpC9cJVKSrolRujCp11CCL2V6yc46JzXuacLuiFYPiz6R9nAvhJ8zOn7zL7H5Hn1Gwq6VkrGyxkOY4Xa4cx+R7LJVlNcK/wRinhzfssh+rlPkvs2U7W7O29cvdazYu1nMcKbzjh0QLbmyGXVM1WDvjJ/zD8jXrpyXJqGxUDobarX4lQWOyzOJ6aLeUqnaLzOvS7GSUGqCoBHdWclyp2QW9VbMNCoNJeZVIxKCRlkTlbZD5imDKnJ3VXSXSFxPSBSSSSXF1dCnhCgCnhckQuF0Kx4CbksrUBVkwBw0XA6NUx7N7RQU0nIolTsDtHfFCjAQVbpZORSeyRIUdOqQYcnvpw197Xbf0Vykp7uuAikeHh0YdcX2tz9fRQ19QKSEyEXefLG0/fO1+w3Pp3VKtdtYwucdNfJErbZ1SrVbTYP3ER5+/Lmh3FGKlg/ZojZxH1jhu1pFsg6Ejft66BKOmACgp2EkucSXOJcSdySbklF6aJeY7SvnXNQvOnAdF69YWNOyoCm3zPM8/x0jjJUtNBzKIf8qyBuRr7Dtp81TceXJdihc8hrASTsAhEkmVK9rXZd/ATXPumFEammbBo8h7+bQRZptz6qi6Q8v16JFpbhdY8PEt05plk9qZ4z+a6HpEFSEFPXR1Ud09pTYTSopWIJiUPMaEagjQjoQVoZWaIbXR3b+uanoPgrrXRBXoeF1Iq6aKW4Beyz+QD2+V/9wKyWL0/nI3V/6N5S6mmiv/w5cw7Ne0af1NcfeiJiDXEubm30Xp2y7kmkH9F5nt6zDbh1MYE69NR9VlzTtAFva5/7JCE62FzYn4C59yv1cNrutug9W5zTzF9elwdvcjTO/oVmXxT1HoqVS+5squRW2xEp5i6KckBQMBcZQ98dlA4K/MLKi9NBVjRcSSSXUk6NqnEaiiV6EpEwmkApkTiEUoPObA2PcgD4lVxTX2XYqZ4Ol1wkOHVRQ5h0kI8yjeG+JbTa9tLqkzCnkGQA5Rv2VyhlleBDra+3fbZGWUcsYyOvY2v39VTdVdTxIn7K+2gysAQHQP8Acu8P0RcwuPLqsRxLiP7TUENN44rsZ0P33e8j4ALYcUVv7NRnJ5XyfVN15uvdw6WaCfWywOHQaALHbfvT/hg65PhwH3XoHwzYCmzt3D/KPufTu+vBXaWFEw2wso4GW9yde6xT3FxWpcZKdFE57g1ouSbADmtBVyCij8NljO8ed++UdG/rupMDgbBE6qeNSLMbz1/z+Ckw/DBZ1TUG5N3a7bdP18tSVC3c1oLf3Eb0n/wZz6F3AxIGkE4FV7hpcQ79rTEf1O5eA+vRZX9mefMdzrr+JTg/0Vuvrc7nWFmnQDo0clTt+vwCGFEWuc4S5Ikn07fJRPU7nZRf9E/7KuZmnmkMJzU2Mqw1QaDW6hlxBo5p26XaLrjOimrKwNFrqlO2QsLvDky29rK7Lbfe1lBhmIRipa+UBzW3IBBLc1vLe3f8FpK7j1mga09zZ2/w2Ruz2a1zN55hDbm+7Fwa0Tx1Tvomfd9UORER+cn+Vu5aRupcNF5pg2JzB9RLSRsAcGukzN0GXN7Dbi1yT8FqOFOKJKn6udjb3LQ9mjXODc+UtJJByteQdjlO1kcs67aQFGc58DkoftSxqVS64gRDSQSJHdGo9mMwqmMUT77HKdQhlTQDTfbpZeiS0gJF9QOSHTYQC7oFo6V9AAKxVfZcuJGZWFdTW7KhVSWWmxejLSQFm6qnKI0nB4koTXY6mYAQqV11XcrUrFXe1WSq7JTEkkk1Sp7ArUBKhpwi9HSZk1zgNVwMJOFPRNutLhEOVwcWg/gqVNRNjaZJHBjGi7nONgB3JWWx36Sst46Jgtt40gvf+Bh29XfBCry8psGSj2y9lXFw7uN048B48PqvSjR+fxWgNsb9AFOzGYM3nqae+1jLHf4XXztiOIVFSc08z3m97OeS0fwt2b7gqf7N3QKptEOxC2lv8LPAkv1zAGJ+X0C9Z+kPEBLUtiY4OZEwag3Bc7zO20PlyfNU6EABeZMY5huxxaext/8AqM4fxG4WbL/UP/kPzQC+t6ldxeDM+qO0qBtqTaUaf3PzlehSO0UtHCXuawbuI+ZWXixUm2ui1nBlY11Q0nkCffawQmnaOdUbTPEgepTKz+zpOfyBK2FXC2SaOn3ZG3O7udgD+uap8X1lssQO+pHblf4aenopcBqRJNNITudPT9WWbxifPK93W/wGn5K7cXTTbuLdajj5Nbho8IA9SeiE21Amu1rtGD5nJVJOaULral2YMYLlxAA7nZFY8JexoLnuJPcZfdohRpENklXby/o2oHanJ0AEnx6DxjohWLTm4a3mQB6k/wCVfFK2GMOzNvsb2c4lu57D3IJjBcyWwcHZTcFuo30PyQ2UVExs52VvXc/7LW7CFvQa59aAeGJ5zHWePoge2v1F2KTbV3dMkwYM4ieg72OeSNFbrsREsxay4buADew6EqeOkBIAFySAAep0CbTUTYhpudzzPclWKCtEdREXHTPY9rggfMhR3VVjnvq0WRqY5wOnMiSrVJtSnRDart4gdff8Y0AWspOEY2svJmd1IOVoPa2qDcU8LlkbpYS4NG4Ov9J6joVuP+VAY8pI5WN9xyQLH8VEcZuQG+0bnTTnZZz9aW1mup1HPluQcd7lHLwzmQSo990GfYXklLxDNTZow4hrwA7LzGuh58z8VyLH3NIdE57HAghzSWkHUXB9CR7ygjpcxJ67LoNlrDRZvTyVj9XVLSJ16Z9ePnK9R4f+lCeOzalonZ99oDJR8LNd6aeq3+EcXQ1QJhcLDdrvbH8Tb6LxfgTD2zyWdZxzZWtO17bnqtx+zxxvAJAAOXOAQWbXtboem9uaJ0bWq9k73CQIJMeKiZYNqtkGDExHuNFv6iBszbgajQrM4lhVuSh4e4o8PxYS0vmZJYkuDWFmVpY4bm5B2tuCtDSYoyoux7Mj+XMHprbQ+qZR2pTpVRRc7vef10lZq8tqbnlhw735LBVlJbkg1Syy2eN0+UkLIVzdVp6L94Ss5XphhhUEk6ySsqBWqNq01AWRsMkhDWMBc5x2ACBYbFchCePsXPlo2HQWdLb72tm+gFveR0Q2/uBRplyL7HsH3lw2m3TieQ4n7DxQ7ivieStflF2QMPkZ1t9p3V5+A2HMkTDAuU8auWWJrVnPdJK9s2ds+nQphrRAC42NOMaeAkqxKMBoCiMd1UngV1Ne1Oa4hQ1qLXhVKKsMRyu1Z/p7j/C1eEVxY7M08tCFlZ4k/DK3wzkd7J2PQ/4Tntnvt1WfubfckcF6NhWMkc973RCV19eqw8MpBWgoq3M2yAV7fdy1Vt0AyEyA/wDWo7AuOYaAXOuny39y0fEUszIr2JyjQcxyVPguNvjyvdq5rAAOzic3+lqk45xUBjmtNi/ygDck/lopQ3eqNaDyBbnPGeAgdT6IFtShTrVpcDgAa4OSfusrQOzjN11v1utLQ4Y5zSWgeUBzi6xAB1G/uQGgiDWAdBZKqx4MIaSBoB62W02HSp1LhwMSB3ZyNc4OpA84mEE+I3XLLVgoSBPe3TBiMCYJDZ18ADqpcXGSMyCQFwdYsykDt5viLLOVEviszDn8iuYxjQeMjdb7AczySpYfDiDSdbaq/t6jRpvYWQH8YjThMfXXmcKH4eqXL6RZWkgaTJ8dSfQYHAJsHElTG0NcBIG6AnQ279UNxPFZqg+ckN2tc6jp2Ct+E57g1u7iAPfstI7gsBjS8O8+jX3Abpo4+ze3rdCbPZgrPL6TGg8zgTrjrxV++vLezLRVcZOgAnjEnlwGeOAsKY7KEAk2Aue2qIY7QOp5nRPINiQCCHDTfUaFFODaKKSRjZpfCZI67pLbDWwv9m/U6C9ym3DX0HFrhnT+Z0hFrCm28PcPdgkkCTA1Eaz0iUGpZJYHeJlcBz/zpsj8fFLCBmcbdDmv39VekZTwVDwB+0RWeGnMYzcts14I6b68lisQjDXkDbf0up7HalWnLMH7IlcU3WTd6iZaf6hxPLQ+IIEFFoeI3ipNSzy3Ps/u2DQD3sB716Lw9WTVOQxscA9zbOyOaNPNcu2IBF/cvF8wD2ZvZztzfw5he/ay+jsJq43RMLdfKLjlfsQgm1n7m7UIzM6kakTEA5znkMw7hmqtu2u7vEz0V3iKk1JXn+KQ2JXpL3+LBmO4JF+ttvlZYXG4tStrsy5Fam17dCAfUSs1tKhuPKzWVJTeGuoxKDbqJYe9sbHSO2Y1zz6NBJ/BeaPmdJI6R5u5z3EnuTcrd4vLlo5j1Zl+LmgrA04WW22877W9J9+i9G+C6A7OpV6x6CfuFeiCuUNOZHtYNyQFUjKIYTU+HKx/QtKzb+i9LZIZ3deC2WOcC/s0AkLxc7jobLDyMsbL0Pj7iITxR+GdLXI7ledOdfdNkSd3ThOvuVT2Q+5fQ37g5JPllNKVkkguosmvj0VCoiRFRyMTmOgqrXoh7V3Cay/1bjqPZPUdPUI3TT5SsrNGQbjQjUFFqCt8RuujhuPzCZcUge8NFnqtI0zulHDi74neJGbOsR2N+RVIVUkpzyG9r5R0vufVUZX9eqsRSgLtKi1jd4DPP7IRdAOq+C01Hhsj4y+xy9QNB3Lh6hAOIeHneH4uhbmLdSNSAHW6jTnZbCnxbLD5HWZIBmA6jQtPobhZbHK7MHa6Dn0C3lts63FEQ1pETvR3jjWcRnyGkK+21ZUpHfaN3nmdOfAz4gckHwemjDPEa0X+akqakIfh0xyAD7TjYep0XpWC8HtEWZzBI8C73uAOUnkzoFjb25bbnvS4kmAMkganwWXuL2naMbiSdAOQ4+C8/oMRayVjjqAdfeDr81pqniQPaBmBAGgvca9LLvFnC8YZ4jMrXkEjLpqLCzx+a81EFze5F+hIRfY212U2GWYweoJHScEeCDXdnS2u5tUS1zRukHOMkaeJ6+GCiGO1njSi3LU/CwCbR1mTyu0APlcoCxrRorjcDq3NLxTT5Rrfwng/0nU/BQX90y4qGpVIE6SY05Sjuz2GwY1tI6fP34qWbFG9fghE05cS48+XTou6KPwc8jGXtmdYntzUNCg0HdbqVavL572y84Gce+S5kL72Bd1sCfwWl4X4smphksHgaam3pfTcLcYBgTRASzK1jALAOALr6X6n1QviXBonwulBaJWWIFvM5oBNnP2cLC1j1Ri42IyrSLd7eI1EcehBwfeFkqHxA2pXax1PdB0dPDmREcOBnkCvRvo9xo1tC4vAEkcj2uDRYanOwgfwuA9WlDsepd1i/ov4obRvlEjXuZI1nsZSQWk62cRycfgF6LidRFURCaF2Zjr8iCCNw4HUFQ7OrNaRTby06K/tO0eaZq7p3Z14TyWJ8FJEfDSWg31muzWfx1l6KXtlPwc1YWnK9FEXiwSxjd8bgPW3l+dl5vEdT6lZ3bbCKrTzH0P8rffBlYdg9nJ0+oA/4lX2FSgqsCpmuWfIXotF6JNqiWZD7lVIUbSu3UcKy2Bourq4kkpF0JEJJBcSUMsapOBYczdx+rFE7KCWNSsfGCqF1bB4RXE4Kd1G2eB7jIB9Y1xALXc25Ry6HogUNdmUMjC29ja4se4QzVpV5ga5sBYu6tqtGoS4yCdVpYcVkjuGO0O7Xatv1tyPcKnVVMk2jy0NvchoIB9bkpQYYZAw5shebBznBrb2532VSledWncKZlao1hYHEDkoX7w7s4PI48D6H0V2CXI5ruTXsdb+Bwdb5L1qn4gDoh4b7tcBtb1AK8eeuRVMkfsPc3sDp8Doh13Z/qIIdukSPEHgYQnaNgbiCx0ESOhHv6r0HHcSY1rnOOw2B+A9V5yzqeeq7LK55u9xd6n8BsuBwT7S0FuwtBknXy5Juz7L9MDJyVpfo7oGzVzS+xEbTI0Hm64a0+65PqAvdpGxgC3e/ryXzhheJPppmzx7t0I+807tvy2GvUBehxfSlBlGZkgdbYNuT772Qra1vcPqFzKYeCANJLYMmOU8fRXdDkoB9LuHsjqmSxi3ig5uVywt8xHWzrH0Cw0jy0tePsm6NcTY8+sm8VwytAyxsvfK3nc8yTqfcOSCShGrBtSjRYH/ALh8szHkIGvDGEx7A5hadCt9g2Nh7BrfuFHj2MtbG4D2nAtb1udCbdAvPdW6gkHsSPwWp4e4TfOM8hk16FunqSCtHc7fp0rc92HHEzgdRz88DjKyx2LQt6wq1HYmYjJjOc6c1Bgp8wG2i9L4Und4MrbDICLEAAkm5OY8yBbflbshHC3Brf29sE4c6IxSSgglpIblAuR3e3bdbbFII4GeHE0NYNgPmSTqT3KEbPo9rWbWacD+3uVpLzaTBs91ACd6CDwAkEnnOCPM+BEZklT8RdWo3Vjt9U8KdqFiuKqDwKlw+y76xno+5+XmH8q1lDJYpcZYd49MJGjzwXJ7s1zj3aO/qVTa1A1KUjhn8or8NXwtrsNdo7unxnB9fkSsLG5TNKpwvVhrlj3NXr1GpIVlpTgVE0qQFRFEmOlSBJNBXbpqnBTkkgkuLqSVl1cXElBLEqM9Oitkx8akZUhU7i1bUCCSudYAk2GwVGKoOYlH5adUZ6K6uU6zTqsxebKqD9nouR1QKQu9wYwZnOOgVSSmcO6s4HOY5C7naw9L6/krdFjHvAJws/fGrQpOO7kaTpPkibuF6gC5dGOwJPzQqRro3Fkgs4fA9wVtqfihrcpDcrha50I06D8kC4urWzObLZuZ0hBsANxroNBs1GK9rbOoOfTG6QJydc6R9/ks3Y31524p18g8hjScaHGkQhBciOAcM1NbcwtswaZ3Xyk9B1Qio9kkL6X4Do4oqOFjALBgv3PMoRTaDko5XqEGAvF676N66NpeMry0XLBo4gfd5E9lkl9YT5Ty+K+beOoGx4hVMYAAJASBtmcxrn2/mc5dqNGoTaLyTBWccQHNJ2Dmk+gIuvaMBxJnggNtY2PxHIrxmQK/h9ZLGMrJHtaeQc63u6IffWprsG66CPoq93aOrEFphe+8I+d8sl7lkYZ6ZzmsOnsjTuqePv3QLgGaanAGY5X3fK1xGt7AnX7QAG2unNGsfOpR3ZNr+mptpnx9cqntSzda0mAmQR7nros5dJcSR+FnUMgK0WFu5HUHQjkR3WegRaimspKgkQoKZAMlYfi7BTSVBA9h/njP7rtx6tOnwPNC43L1nG8NbW05i0EjfNG4/ftsex2PuPJeRvjcxxY8EEEtcDuCDYgrG39r2T9MHT8eS9Y+H9qi6owT3m4PXkfPj1VlrlMwqqxykBQxwWtpVFaCdZRNcp43jY7fgoirzXSuBdSc2yaCm6qUFOSSXEgnLqS6Culq4kmkKN0SkSXZTXNDtVUkp1Vkp+moRVNdGpWVSCqdaxZUBBCCylw7oc+Yk3K0E9OhVXTc+aIsvHPbuuKyN7sRtAl9JsdPx+FHHKCLFencB/SKymiEFVnszRkrWl/l5B4Gtx1AN+ffycGytxSXsACSdABqSeQAUgJacIM9jXDK9j4g+lWEMIpc0jzsXMcxoPU5rE+gHwXkU87nuc95LnPcXOcdy5xuT8SikXC1Y4X8IN7Odr8r2U+FcD4jUexSSAXsXSWiaPe8jMO7bqNldlYkMcDGsEH6KMBjNEBjYXGwFz0RzBMPJlbnFg0hxHpt816Fhf0Vyta3NJE0283mc45r7izRytzWywXhJsDXNcY5Guay4MWZoe2/nGZx1Idray7SLu1G83uqzNtTYHufvO13Rp4TEdZngsjhkTnkdAbk9Fbxie9/QBauo4ddazHsaOgjDR8is9ifCVXqW5JOwcQ7+4AfNaGlXokyXAev3AQTbd5XvN0MpENbMZBOeJjTGgWX8RJXP+bNb/4D/wCpn+Ulf7Wl/W31CzHYVv6Hf/J/CCRuVmKRVGqeNWlQejmHVNiFS444a/aGftULbysF5Gjd7APaA5uA+I9NZaFi02F1gYQh19QbVYWorsm8qWtUVGn+eh6f3GV4S16mY9b/AI94Nvmq6RumrpYmjbmZGD7vUctx284ZIshXoOpu3XL1vZ+0adzTFRh8uIPv1V5rlM111TY9Stcqjmo5Tqq41/IpKFj1IFGQrzHynp100FIJsKYFdTmPsmpWXF1WGxh2xsUnUbxyuoAbK9R4k5h6jullRO3x+3KpOaRumre4NiuHzDJUwhpP22/mCmcVcJwRx+PTSh7DyuCR8FwHEn35cvBURtNraopVWOaTgEjunwIWFcFQqokRIUbaZ0jhHG0lxNmtaLkk8gFIw5Vm6YCwysvVssbr0v6MPo+qXSCqqGeDHbyB4+sdfmGfZFubrdgQVpsB4QpcMjFXXlr5gQWNsHNa61wIm/bk/e2FtLWuqOI47V4k8xRAxw63a11iW9ZpOfoNPXdX69WlSpHtjiNFgDbuuqrnUcMBy46dYWsxLiqgozlb9dK3TLFZ5BHJz/ZaeovfsszXfSNVSH6mKOFvV15H/E2b/aUBqsEfTkNkblvsRYtPoR+C6yBDn7SLhNOAOiMW2x7VrQ49/qTj0GPqpZOIcQf7VXIOzSGD+wBRjEa3f9rqP/Wk/wAqVkKJ4Zg75r5LWbuXEgXPIWBVOpfvGXO+auPo21JslrQPAfhDY8cxBmrauX+Z2f8A1gorh/0kVUJAqI2St5uaMj/XTyn0sPVQy0ZaS1ws5psQg+KQCxUlDaFSYlQPtLWqILB5CPpC9B/6T6HpP/Q3/wC6S8gyLiJfrX8gq3/Qrf8Azev8I41W4AqgU8b16KV4uiTJVNHV8ghRlUsF7pBg4qF1QzhavDqpzSL35LPcdcA+IDVUbbOOskA0Durou/VvPlroSVNMRYk7I3DjBIAJ0GyFXdqK2IR7Ze0X2bt5pjpwPj0XgeoNjoRoQdwed1LG9escU8Jw1pMkREdR97Zj+gfbY/vDXrdeVYhQS08himYWubuDzHIg7EHqNFmrm1fSMOXpey9r0rtssMEajj/I6p4cpGPVJr1Ox6pOatBSrq2HJ4KqtepQ5RFqvsqqcFJRApwKaQpw9SLlkzMnBy5CdvBdCuMxF4blubKmkSlqk5odqugEmw1JOgG5J6L1PAMKiwumNXUi87hawtmbm9mKP948zy15Akivox4fD3GrkGjDaIHYvFrv9G8u57IZxZjZrKjyn6mMlsY5H7z/AFdbTsB3VpsUWdq7Xh+VmNpV3Xtx+jpmGN/eR/t9+mM0sVxKWsl8WU6bNaPZY37rfzO5RfhXE2Uz3iTRsgb5rE2Lb2vbWxzfJCIY1ZEfVBbl3bgh/FWnW1PsuxAhvT3/AH4rW4jXQ1UU7IzmMUfi5rEAFtyLE+hHvWYiivsL+gujUUAp6F7iLOns1vXKRYfLO73orhlE2iYZpngAtjBNj5CXEEX5i5br2QymRSDgySJgDmcA/MoZTrNtmOazPeho5mBPDmUFwHDhPIWknK1uY23OtgP10R3BJ4bTspsxcxziWyaAutlGUjldlk+SIQVTJdo6gGJx5CbRzD/NYj19VUgoHw1bnxj6p+cuNwNHHNa3XNb3JtRwcCXHhIE8Rr+FVrVu3kzALQQOEg5B5lBhK6QulfbM83IGw0sB8AEIxg6FaXEofDkcB7LvM33+0Pj+IWSxyTkrVqd9wI0RK3cHQRogiSSSMIii6QKSS9UXz2po9UQpwAh0TlYbKmOzhcDQMogZ1Zpq9mRwcLuNspva2uunNBHy3TotSu7gjKj7RwdhaTDnOtn1tfdWcXoqesj8OobewOV4sHsPUO/LYoPFUFosmurLKrVoCrIcFeoXTreHMMEcVhuJOFpqQlw+sivpI0fAOH2T8u6AskXsNLXX0OoOhB1BHQhAsf4IilvJTOETzqWH/hn+Hmz5j0QC72S5hmnkcvf9/FbjZPxS2oNy5wf6hp5jh4jHgsEyRTNcoa6glp3ZJWFvqND7xoR6KBsyCupkYW2o3jXAOBkHiEQDk8OVJsyeJFEWK824CthyWZQB6dnTd1Tisp2vVqhpnSyMiaLl5Y1o7udZDc63P0S0Pi1bpTqIWEt/id5W/wBub4BdZS3nAKG7vxQoOqchjx0HzIWt4xnbRUDKWI2Mg8Fp2OQC8z/U3t6yLC4ZROeQ1jS422aL6deyMfSBV+LW5OUTWt/mIzuP94H8qk4WxRlM9/iA5XhozAXykE7ga2Ob5BVtqVnSQwTGgQWwY+hZ9oBvPd3vGdPlnxKoupnMOV7S09HAg/NGuHMF8Z2d4+qaef2yOXoOfw62LMr6atzxC4czVhe0gnbzNG5F9CNPwKsxV0crX0z2+E9rcrowcvltYOhI3YRseWxQGpXdBDsHj0HP3oo69/VNMtDS13HoDxHvHoqgiZXyyjN9VEDEwDnI7ea3QWsOuqfhj/GppaWf24/qSd9P+7ffntoeeW/NU6LCX08zXRkGMgtfc2OXcXGxIIH+yVbiXi5BSOBeXAvNtBGA4Wl6anbdQl+N2lpGv9Pjy/MHgq7mz3GGWiCDpukaz45J6+CVDiDPC8CqIvAQLOO4jI8Mt6kW+Q6qia+qnYYw0DPcGQZgQ09TsDbn8kpZoWOJeTUS87AFgPToPmU2XEqh3shkY9Mx+J0+SkDM7waM5l2gPQax/A4KdtMSXNbrnOgPQa6/ZXOIpQGMudc2nUjKb/ksLiktyimITG5c5xc7qT+HQLPyvubohZUOzaEQtKW41RpLqSIK6i6SSS9TXz2ugpZ1xJJJPa5WoXWVMLokSK4BCvmZQOkVcyJByQwmuBKIU0iuCtshDZVwyppbJT2ndGEWlqWyAtkax7TyeAR80DruE4JNYi6N39bPdfUfFSiRPZOoK1nSqjvtn3z1+at2m0bm1M0nkfTzBkfJZes4SqY9WNEg6sOZ39JAPyQmeGRhs9jm9iHX+a9GbWldfV30NiOjhcfNCqmxWk9xxHiJ/C0tv8XVmiKrAfA7p+4+i81E67469BfTU7vahi9zA38LKJuEUgN/Bb7y8/IuVR2xK3At+Y+yKs+MbeO8x8/+p/5D6LBmY9D8F7R9DVC5lJJI5pBlm0uLEtYxtt+V3OWdi8JmrIomnqGjN8d16RwU/NSxO+86Q/CQt/IJtTZptm77nTmPr+FXf8Qi/JosYQNZJ5RwGOPMrzCtlMlTO8/anlPuznL8rK9DGLIBHUWkdfqfxKJx146rGXTXOeSt+GlrGtHABEg0tLZI9HsNwfyPY7e9HKuJlXGyVhySN9lwNi13OMkfrnz1yoxEdVyLFXRuLo35b7i12n1Covt3uIIw4aH7FVKtFz4cNR7I8EfbitQwZHsDnDQOPlPqQND7rKlG05BGPK3d9t3nuenZDJMbe43e+/QaAD0CgkxhSNtnDRoHhz9+i6y3I4AI6HMYNLIfXYkgs2Ikqo+QncqanaQZcrDLfMlS1dSXHsqySSvAACArIEJJJJLq6jCSSS9TXz2kkkkkkkkkkkkuJJJJJLoSXEl1JJJJJcSXUkkkkl0LoSSXUkivUOA/+xQ+sv8A7z0kkL2t/gt/1fYovsf/ABnf6T9QvG8S/wCNL/5j/wDUUxqSSwVXU+JXs9L9jfAfQLqakkmKQLi4Ukkk5dCSSSSS4kkkkkkkkkkuL//Z',
      languages: 'C, Graphics Tool Kit',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'shephzibah', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
