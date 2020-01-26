const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

// Todo: your code goes here
let filestree = (object, root) => {

  const ul = document.createElement('ul');
  for (let item of object) {
    const li = document.createElement('li');
    const p = document.createElement('p');
    const img = document.createElement('i');
    img.classList.add('material-icons');

    p.append(img);
    p.append(`${item.title}`);
    
    li.append(p);
    ul.append(li);

    if (item.folder) {
      p.classList.add('folder');
      if (ul.parentNode !== root) {
          ul.classList.toggle('listItem');
      }
      img.innerHTML = 'folder';

      p.onclick = function() {
          if (img.innerHTML === 'folder') {
              img.innerHTML = 'folder_open';
          } else {
              img.innerHTML = 'folder';
          }
          li.querySelector('.listItem').classList.toggle('open');
      }

      if (item.children) {
          filestree(item.children, li);
      } else {
          const emptyFolder = document.createElement('p');
          emptyFolder.classList.add('empty', 'listItem');
          emptyFolder.innerHTML = 'Folder is empty';
          li.append(emptyFolder);
      }

  } else {
      p.classList.add('moviFile');
      img.innerHTML = 'insert_drive_file';
  }
}
root.append(ul);   
}

filestree(structure, rootNode);

