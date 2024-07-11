// 点赞
function toggleLike(postId) {
    const likeIcon = document.querySelector(`#post-${postId} .like i`);
    const likeCount = document.querySelector(`#post-${postId} .like-count`);
    likeIcon.classList.toggle('fa-thumbs-o-up');
    likeIcon.classList.toggle('fa-thumbs-up');
    likeIcon.parentNode.classList.toggle('active');

    let count = parseInt(likeCount.textContent) || 0;
    if (likeIcon.classList.contains('fa-thumbs-up')) {
        count++;
    } else {
        count--;
    }
    likeCount.textContent = count > 0 ? count : '';
}
// 更多窗口
// 定义全局变量来跟踪当前打开的菜单
let currentOpenMenu = null;

function toggleMenu(element) {
    // 获取当前菜单
    const menu = element.nextElementSibling;

    // 如果当前有打开的菜单并且不是同一个，先关闭它
    if (currentOpenMenu && currentOpenMenu !== menu) {
        currentOpenMenu.style.display = 'none';
    }

    // 切换当前菜单的显示状态
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        currentOpenMenu = null;
    } else {
        menu.style.display = 'block';
        currentOpenMenu = menu; // 更新当前打开的菜单
    }
}

function reportPost(element) {
    alert("举报成功！");
    // 这里可以添加更多的举报逻辑，比如发送请求到服务器
    closeMenu(element);
}

function cancelAction(element) {
    alert("取消操作！");
    // 关闭当前菜单
    closeMenu(element);
}

function closeMenu(element) {
    // 获取当前菜单
    const menu = element.closest('.menu-options');
    if (menu) {
        menu.style.display = 'none';
        currentOpenMenu = null;
    }
}

document.addEventListener('click', function(event) {
    // 如果点击事件不是发生在菜单按钮或菜单内部，关闭所有菜单
    const isMenuButton = event.target.matches('.fa-ellipsis-h');
    const isInsideMenu = event.target.closest('.menu');

    if (!isMenuButton && !isInsideMenu) {
        if (currentOpenMenu) {
            currentOpenMenu.style.display = 'none';
            currentOpenMenu = null;
        }
    }
});
