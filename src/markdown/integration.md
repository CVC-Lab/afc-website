---
title: "Integration of IR/EO Video Streams"
slug: "/integration"
id: 4
---
# Integration of IR/EO Video Streams

The integration of Infrared (IR) and Electro-Optical (EO) video streams stands
as a complex and critical challenge in the realms of computer vision and
surveillance technologies. Our contributions in this sector seek to pioneer new
frontiers by utilizing innovative techniques that address both traditional and
emergent challenges in object detection, shape matching, and intensity
recovery.

In the realm of consistent shape matching, our work draws upon the GenCorres
method, offering a robust solution for matching and aligning diverse
geometries. Complementing this, the E-CIR technique addresses the continuous
intensity recovery, adapting novel principles of information retrieval and
object recognition.

Further augmenting our approach is the integration of recent advancements in
adversarial attack pipelines, as detailed in "Learning Transferable 3D
Adversarial Cloaks for Deep Trained Detectors" (Maesumi et al., 2021). This
method introduces a novel patch-based adversarial attack that trains
adversarial patches on 3D human meshes, offering an innovative attacking scheme
with real-world robustness. Contrary to traditional adversarial attacks, this
approach incorporates deformation consistent with real-world materials,
rendering it effective under varying views. Collectively, these groundbreaking
methods form the core of our strategy for integrating IR and EO video streams.
In the subsequent sections, we elucidate the technicalities of these
contributions, emphasizing their relevance to the broader scope of our project.

## GenCorres: Consistent Shape Matching via Coupled Implicit-Explicit Shape Generative Models

GenCorres introduces a groundbreaking unsupervised joint shape matching (JSM)
approach (Yang et al., 2023). At its core, GenCorres learns a parametric
mesh generator to fit deformable shapes, preserving local geometric structures
and enforcing consistent correspondences. Three primary advantages define
GenCorres:

1. **Data-Driven Power of JSM:** GenCorres performs JSM on a synthetic
   shape collection much larger than the input shapes, maximizing the
   data-driven potential.

2. **Unified Matching Approach:** GenCorres combines consistent shape
   matching and pairwise matching by enforcing deformation priors
   between adjacent synthetic shapes.

3. **Concise Encoding:** The generator within GenCorres encapsulates a
   simplified encoding of consistent shape correspondences.

Despite the inherent challenges in learning a mesh generator from unorganized
shapes, GenCorres overcomes local minima by utilizing an implicit generator to
provide intermediate shapes. Experimental results attest to the substantial
superiority of GenCorres over existing JSM techniques, with synthetic shapes
preserving local geometric features and outperforming competitive deformable
shape generators.

## E-CIR: Event-Enhanced Continuous Intensity Recovery

E-CIR contributes a novel approach to the conversion of blurry images into
sharp videos (Song et al., 2022). Motion blur, a pervasive visual artifact, is
resolved by E-CIR through the parametric representation of time-to-intensity
functions. By leveraging events as auxiliary input, E-CIR constructs parametric
bases and trains a deep learning model to predict function coefficients. The
introduction of a refinement module further ensures consistency across
consecutive frames.

Comparatively, E-CIR delivers smoother and more realistic results against
existing event-enhanced deblurring methods. The approach bridges the
integration of IR/EO video streams, providing a robust solution to motion blur
and intensity recovery.

Figure 1 offers a comprehensive view of E-CIR's structure, detailing the
step-by-step flow from blurry image input to sharp video output, utilizing the
innovations of event-enhanced processing and refinement techniques.

<figure id="e-cir">
<img src="../images/E-CIR.png" alt="The architecture of E-CIR showing the process of converting a blurry image into a sharp video. The diagram illustrates how events are leveraged to construct parametric bases, the deep learning model for predicting coefficients, and the refinement module to ensure visual consistency across frames."/>
<figcaption>Figure 1: E-CIR Architecture</figcaption>
</figure>

**Code:**
The code for E-CIR: Event-Enhanced Continuous Intensity Recovery is available
in SharePoint. This PyTorch-based implementation comprises two main modules:
the initialization module, responsible for regressing polynomial coefficients
from the events and the blurry frame, and the refinement module, which polishes
frame quality through visual feature propagation. For experimentation, E-CIR
was tested on the REDS dataset and seven real event captures in EDI. The REDS
dataset is a REalistic and Dynamic Scenes (REDS) dataset for video deblurring
and super-resolution. Detailed instructions on setting up these datasets can be
found in the corresponding REDS\_Dataset.md and EDI\_Dataset.md files.

## Learning Transferable 3D Adversarial Cloaks for Deep Trained Detectors

<figure id="3DCloakArchitecture">
<img src="../images/3DCloakArchitecture.png" alt="3D adversarial logo pipeline"/>
<figcaption>Figure 2: 3D Adversarial Logo Pipeline.</figcaption>
</figure>

<figure id="3DCloakExample">
<img src="../images/3DCloakExample.png" alt="Examples of our adversarial attack against Faster R-CNN. The first row contains human meshes without any adversarial perturbation; Faster R-CNN is 99% confident in its human predictions in these images. The second row displays the cloaking effect of an adversarial patch trained by the pipeline outlined in Figure. To bolster our attack robustness, we train and test our adversarial logos on meshes with a diverse set of surface-level and body-level deformations. The figure above features running, walking, and idle poses on meshes of various shapes and sizes, which are sampled from the SURREAL dataset. We even observe attack success for partially occluded adversarial textures (e.g. the third column)."/>
<figcaption>Figure 3: Adversarial Attack Examples against Faster R-CNN.</figcaption>
</figure>

The advent of "Learning Transferable 3D Adversarial Cloaks for Deep Trained
Detectors" (Maesumi et al., 2021) marks a transformative moment in the
world of adversarial research. This method presents a groundbreaking
adversarial attack pipeline that crafts adversarial patches on 3D human meshes.
The architecture is shown in Figure 1, while
example results are shown in Figure 2. Key contributions
and characteristics of this approach are summarized below:

1. **Innovative Patch-Based Attack:** Unlike traditional adversarial
   attacks that append patches, this new form of attack maps into the
   3D object world and is back-propagated through differentiable
   rendering. This creates adversarial textures on 3D human meshes,
   leading to an attacking scheme that maintains its efficacy in the
   physical world.

2. **Real-World Robustness:** The adversarial patches are trained under
   deformations consistent with real-world materials, showcasing the
   ability to fool state-of-the-art deep object detectors even under
   varying views. This represents a significant advance over existing
   methods.

3. **Transferable Adversarial Design:** The created 3D adversarial
   patches can be transferred to human meshes in various poses and
   rendered onto real-world background images. This contributes to an
   enhanced and more versatile attacking scheme.

4. **Potential Implications:** The proposed method's persistent
   strength in physical-world scenarios offers a rich avenue for
   exploration in both adversarial defense mechanisms and real-world
   object detection strategies.

In the context of the integration of IR/EO video streams, this innovative
method introduces a complex layer of considerations related to object detection
and adversarial resilience. Through the synthesis of 3D object modeling and
adversarial texture creation, this method contributes to an evolving landscape
of techniques that must be handled with care in the deployment of IR/EO
systems. Experimental results further emphasize the effectiveness and
uniqueness of this approach, suggesting promising directions for future
research and applications.

**Code:**
The code is available in SharePoint.

#### References

- Maesumi, A., Zhu, M., Wang, Y., Chen, T., Wang, Z., & Bajaj, C. (2021).
  Learning transferable 3D adversarial cloaks for deep trained detectors. ArXiv
  Preprint ArXiv:2104.11101.

- Yang, H., Huang, X., Sun, B., Bajaj, C., & Huang, Q. (2023). GenCorres:
  Consistent Shape Matching via Coupled Implicit-Explicit Shape Generative
  Models. ArXiv Preprint ArXiv:2304.10523.

- Song, C., Huang, Q., & Bajaj, C. (2022). E-cir: Event-enhanced continuous
  intensity recovery. Proceedings of the IEEE/CVF Conference on Computer Vision
  and Pattern Recognition, 7803–7812.