document.addEventListener("DOMContentLoaded", function () {
    function createVideoModal(videoSrc, title = "Video Player") {
        let existingModal = document.getElementById('videoModal');

        if (existingModal) {
            existingModal.remove();
        }

        const modalHTML = `
            <div class="modal fade" id="videoModal" tabindex="-1" aria-labelledby="videoModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="videoModalLabel">${title}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body p-0">
                            <div class="video-container position-relative" style="max-width: 100%; overflow: hidden;">
                                <video id="demoVideo" controls preload="metadata" style="max-width: 100%; height: auto;">
                                    <source src="${videoSrc}" type="video/mp4">
                                    Your browser does not support the video tag.
                                </video>
                                <div id="playOverlay" class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                                     style="background-color: rgba(0,0,0,0.3); cursor: pointer;">
                                    <i class="bi bi-play-circle-fill text-white" style="font-size: 5rem;"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);

        const videoModal = document.getElementById('videoModal');
        const demoVideo = document.getElementById('demoVideo');
        const playOverlay = document.getElementById('playOverlay');

        videoModal.addEventListener('shown.bs.modal', function () {
            if (demoVideo) {
                demoVideo.currentTime = 0;
                if (playOverlay && demoVideo.paused) {
                    playOverlay.style.display = 'flex';
                }
                demoVideo.play();
            }
        });

        if (playOverlay) {
            playOverlay.addEventListener('click', function () {
                if (demoVideo) {
                    demoVideo.play()
                        .then(() => {
                            playOverlay.style.setProperty('display', 'none', 'important');
                        })
                        .catch(error => {
                            console.error('Play failed:', error);
                        });
                }
            });
        }

        if (demoVideo) {
            demoVideo.addEventListener('play', function () {
                if (playOverlay) {
                    playOverlay.style.setProperty('display', 'none', 'important');
                }
            });

            demoVideo.addEventListener('pause', function () {
                if (playOverlay && demoVideo.currentTime !== demoVideo.duration) {
                    playOverlay.style.display = 'flex';
                }
            });

            demoVideo.addEventListener('ended', function () {
                if (playOverlay) {
                    playOverlay.style.display = 'flex';
                }
            });
        }

        videoModal.addEventListener('hidden.bs.modal', function () {
            if (demoVideo) {
                demoVideo.pause();
            }
        });

        const bootstrapModal = new bootstrap.Modal(videoModal);
        bootstrapModal.show();
    }

    document.querySelectorAll(".watch-video-btn").forEach(button => {
        button.addEventListener("click", function () {
            const videoSrc = this.getAttribute("data-video-src");
            const videoTitle = this.getAttribute("data-video-title");
            createVideoModal(videoSrc, videoTitle);
        });
    });

    document.querySelectorAll(".video-thumbnail").forEach(thumbnail => {
        thumbnail.addEventListener("click", function () {
            const videoSrc = this.getAttribute("data-video-src");
            const videoTitle = this.getAttribute("data-video-title");
            createVideoModal(videoSrc, videoTitle);
        });
    });
});
