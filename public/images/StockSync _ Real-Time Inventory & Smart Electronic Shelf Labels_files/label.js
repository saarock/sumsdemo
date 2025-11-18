function updateESL(action) {
    const ledIndicator = document.getElementById('ledIndicator');
    const eslImage = document.getElementById('eslImage');

    ledIndicator.style.display = 'none';

    switch (action) {
        case 'low':
            eslImage.src = '/assets/labels/low-stock.png';
            eslImage.alt = 'Low Stock Status';
            ledIndicator.style.backgroundColor = '#ff0000';
            ledIndicator.style.display = 'block';
            break;
        case 'out':
            eslImage.src = '/assets/labels/no-stock.png';
            eslImage.alt = 'Out of Stock Status';
            ledIndicator.style.backgroundColor = '#FFFFFF';
            ledIndicator.style.display = 'block';
            break;
        case 'normal':
            eslImage.src = '/assets/labels/stock-ok.png';
            eslImage.alt = 'Normal Stock Status';
            ledIndicator.style.display = 'none';
            break;
        case 'alert':
            eslImage.src = '/assets/labels/stock-alert.png';
            eslImage.alt = 'Stock Alert Status';
            ledIndicator.style.backgroundColor = '#ffa500';
            ledIndicator.style.display = 'block';
            break;
        case 'high':
            eslImage.src = '/assets/labels/high-stock.png';
            eslImage.alt = 'High Stock Alert Status';
            ledIndicator.style.backgroundColor = '#800080';
            ledIndicator.style.display = 'block';
            break;
    }
}