// DOB Picker Modal Component

function createDOBPicker() {
    const modal = document.createElement('div');
    modal.id = 'dobPickerModal';
    modal.style.cssText = `
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(4px);
        z-index: 10000;
        align-items: center;
        justify-content: center;
        padding: 20px;
    `;

    const content = document.createElement('div');
    content.style.cssText = `
        background: #ffffff;
        border-radius: 20px;
        padding: 32px 28px;
        max-width: 420px;
        width: 100%;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        transform: scale(0.9);
        transition: transform 0.3s ease;
    `;

    const lang = getCurrentLanguage();

    content.innerHTML = `
        <h2 style="
            font-size: 1.5rem;
            font-weight: 800;
            color: #000000;
            margin-bottom: 12px;
            letter-spacing: -0.5px;
        ">${t('pred.enter.dob')}</h2>

        <p style="
            color: #333;
            font-size: 0.95rem;
            margin-bottom: 24px;
            line-height: 1.6;
            font-weight: 500;
        ">${t('pred.enter.dob.desc')}</p>

        <div style="margin-bottom: 24px;">
            <label style="
                display: block;
                font-weight: 700;
                color: #000000;
                margin-bottom: 10px;
                font-size: 0.95rem;
            ">${t('dob.label')}</label>

            <input
                type="date"
                id="dobPickerInput"
                style="
                    width: 100%;
                    padding: 16px;
                    border: 2px solid #e8e8e8;
                    border-radius: 12px;
                    font-size: 1.05rem;
                    font-family: inherit;
                    font-weight: 500;
                    color: #000000;
                    background: #ffffff;
                    transition: all 0.2s;
                "
            />
        </div>

        <div style="display: flex; gap: 12px;">
            <button
                id="dobPickerCancel"
                style="
                    flex: 1;
                    padding: 16px;
                    background: #f5f5f5;
                    color: #000000;
                    border: 2px solid #e8e8e8;
                    border-radius: 12px;
                    font-size: 1rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: all 0.2s;
                "
            >Cancel</button>

            <button
                id="dobPickerSubmit"
                style="
                    flex: 2;
                    padding: 16px;
                    background: #000000;
                    color: #ffffff;
                    border: none;
                    border-radius: 12px;
                    font-size: 1rem;
                    font-weight: 800;
                    cursor: pointer;
                    transition: all 0.2s;
                    letter-spacing: -0.3px;
                "
            >${t('pred.select.date')}</button>
        </div>
    `;

    modal.appendChild(content);
    document.body.appendChild(modal);

    // Add hover effects
    const submitBtn = content.querySelector('#dobPickerSubmit');
    const cancelBtn = content.querySelector('#dobPickerCancel');
    const input = content.querySelector('#dobPickerInput');

    submitBtn.onmouseover = () => {
        submitBtn.style.background = '#1a1a1a';
        submitBtn.style.transform = 'translateY(-2px)';
        submitBtn.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.2)';
    };
    submitBtn.onmouseout = () => {
        submitBtn.style.background = '#000000';
        submitBtn.style.transform = 'translateY(0)';
        submitBtn.style.boxShadow = 'none';
    };

    cancelBtn.onmouseover = () => {
        cancelBtn.style.background = '#e8e8e8';
        cancelBtn.style.borderColor = '#000000';
    };
    cancelBtn.onmouseout = () => {
        cancelBtn.style.background = '#f5f5f5';
        cancelBtn.style.borderColor = '#e8e8e8';
    };

    input.onfocus = () => {
        input.style.borderColor = '#000000';
        input.style.background = '#fafafa';
    };
    input.onblur = () => {
        input.style.borderColor = '#e8e8e8';
        input.style.background = '#ffffff';
    };

    // Event listeners
    cancelBtn.onclick = () => closeDOBPicker();

    submitBtn.onclick = () => {
        const dob = input.value;
        if (!dob) {
            alert('Please select your date of birth');
            return;
        }
        sessionStorage.setItem('userDOB', dob);
        closeDOBPicker();
        location.reload(); // Reload to show predictions
    };

    // Close on outside click
    modal.onclick = (e) => {
        if (e.target === modal) {
            closeDOBPicker();
        }
    };

    // Load existing DOB if any
    const savedDOB = sessionStorage.getItem('userDOB');
    if (savedDOB) {
        input.value = savedDOB;
    }

    return modal;
}

function openDOBPicker() {
    let modal = document.getElementById('dobPickerModal');
    if (!modal) {
        modal = createDOBPicker();
    }
    modal.style.display = 'flex';
    setTimeout(() => {
        const content = modal.querySelector('div');
        content.style.transform = 'scale(1)';
    }, 10);
}

function closeDOBPicker() {
    const modal = document.getElementById('dobPickerModal');
    if (modal) {
        const content = modal.querySelector('div');
        content.style.transform = 'scale(0.9)';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
}

// Auto-open on pages that need DOB
function autoOpenDOBPickerIfNeeded(pageName) {
    const dob = sessionStorage.getItem('userDOB');
    if (!dob && pageName) {
        setTimeout(() => openDOBPicker(), 500);
    }
}
