# Camera ISP Code & Paper

The realm of Camera Image Signal Processing (ISP) entails the development of
advanced algorithms and techniques to process and enhance the quality of images
captured by camera sensors. Our contributions to this field have yielded a
collection of methodologies and approaches that cater to different aspects of
camera ISP. From denoising to scene synthesis, our work has paved the way for
advancements in camera technology, providing robust, adaptable, and innovative
methods to address current challenges. The implications of these contributions
hold promising potential for future developments in camera imaging, sensor
technologies, and multimedia applications. We outline these contributions
below:

## Deep Contrastive Patch-Based Subspace Learning for Camera Image Signal Processing

Our work on Deep Contrastive Patch-Based Subspace Learning (Yang et al., 2021)
led to the creation of the Patch Subspace Learning Autoencoder (PSL-AE). This
deep neural network model employs a patch-based, local subspace approach that
emphasizes robust heterogeneous artifacts, focusing specifically on image
denoising. The ability to process and eliminate noise at a local subspace level
allows for greater precision and effectiveness in enhancing the overall image
quality.

## Reinforcement Learning of Self Enhancing Camera Image and Signal Processing

The Recursive Self Enhancement Reinforcement Learning (RSE-RL) model
(Bajaj et al., 2023) was introduced to employ deep reinforcement
learning for spatially adaptive artifact filtering. This approach has
demonstrated significant advantages in heterogeneous noise and artifact
removal. By using reinforcement learning to adapt to the spatial
characteristics of the image, this method provides a dynamic solution to the
challenges of noise and artifact mitigation.

<figure id="RSE-RL">
<img src="../static/images/RSE-RL.png" alt="Diagram illustrating the RSE-RL pipeline"/>
</figure>

Figure 1: The overall pipeline of our RSE-RL: For each captured (and training)
image, we split the image into local patches and feed every patch as a stack
into the encoding network. We divide the latent space into three subspaces
*Z*<sub>*y*</sub>, *Z*<sub>*u*</sub>, and *Z*<sub>*v*</sub> which preserve the
YUV features of the patches. We apply the encoder to the clean and noisy
patches and project them as well onto the same three latent subspaces. Then, we
learn a set of transformations T that transforms the latent representation of
the noisy patches to a corresponding representation of the clean patches, in
all three subspaces. We send individually sampled transformed noisy
representations to the decoders to reconstruct the image. Note that we have
three decoders to reconstruct YUV features from the three subspaces. Then we
merge and reconvert from the YUV features to reconstruct the final RGB image.
Once we reconstruct the images, we train a soft-actor-critic reinforcement
learning algorithm to further maximize the image PSNR. The RL algorithm uses a
1-norm distance between a target PSNR and the actual PSNR as the reward to
fine-tune the trainable weights in the set of transformations *T*.

## Invariance-based Multi-clustering of Latent Space Embeddings for Equivariant Learning

In the domain of image recognition, our work on Invariance-based
Multi-clustering of Latent Space Embeddings (Bajaj et al., 2021) uses
Variational Autoencoders (VAEs) to learn invariant and equivariant clusters in
latent space. The novel separation of semantic and equivariant variables
provides enhanced capabilities for image recognition, offering a structured and
targeted approach to discerning and interpreting image content.

## Scene Synthesis via Uncertainty-Driven Attribute Synchronization

Finally, our work on Scene Synthesis via Uncertainty-Driven Attribute
Synchronization (Yang et al., 2021) offers a novel approach to 3D scene
synthesis. Integrating neural network-based and conventional methods, this
approach captures diverse 3D scene patterns, outperforming existing
methodologies. Its relevance to Camera ISP lies in the ability to synthesize
and model complex scenes, offering new possibilities for camera imaging
applications.

#### References

- Bajaj, C., Roy, A., & Zhang, H. (2021). Invariance-based multi-clustering of
  latent space embeddings for equivariant learning. ArXiv Preprint ArXiv:
  2107.11717.

- Bajaj, C., Yang, Y., & Wang, Y. (2023). Reinforcement Learning of
  Self-enhancing Camera Image and Signal Processing. In Advances in Data-driven
  Computing and Intelligent Systems: Selected Papers from ADCIS 2022, Volume
  2 (pp. 281–303). Springer.

- Yang, Y., Zheng, Y., Wang, Y., & Bajaj, C. (2021). Deep Contrastive
  Patch-Based Subspace Learning for Camera Image Signal Processing. *arXiv
  preprint arXiv:2104.00253*.

- Yang, H., Zhang, Z., Yan, S., Huang, H., Ma, C., Zheng, Y., Bajaj, C., &
  Huang, Q. (2021). Scene synthesis via uncertainty-driven attribute
  synchronization.