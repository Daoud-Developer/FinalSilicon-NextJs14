"use client";
import Image from 'next/image'

function Quotation() {
  return (
      <div>
      <figure className="position-relative mb-4 ps-4">
      <span className="position-absolute top-0 start-0 w-3 h-100 bg-primary"></span>
      <blockquote className="blockquote fs-xl fw-medium text-dark ps-1 ps-sm-3">
        <p>Sollicitudin eget massa, elementum, purus nec fermentum vitae, elementum. Tincidunt vulputate lorem cursus id. Dictum tincidunt mi ornare tristique. Id sit elit pulvinar eu. Tempus vel, mauris sed proin aliquet vulputate cras est. Ut ornare eget a viverra.</p>
      </blockquote>
      <figcaption className="d-flex align-items-center pt-3 ps-1 ps-sm-3">
        <Image src="/assets/img/avatar/04.jpg" width={48} height={48} className="rounded-circle" alt="Jane Cooper"/>
        <div className="ps-3">
          <h6 className="fw-semibold lh-base mb-0">Jane Cooper</h6>
          <span className="fs-sm text-muted">CEO of Ipsum Company</span>
        </div>
      </figcaption>
    </figure>

    <p className="mb-4 pb-2">Pellentesque laoreet neque ut dictumst fames scelerisque. In malesuada orci dapibus risus tellus, amet, ultrices sagittis a. Turpis vel tincidunt tristique maecenas cursus tortor, suscipit ut. Ullamcorper at faucibus dolor tortor suspendisse suscipit senectus convallis aliquam. At orci amet facilisi nunc mi vitae iaculis diam a. Mauris venenatis sed purus cursus torte.</p>
    <h2 className="h4">Paragraph Title 2</h2>
    <p className="mb-4 pb-2">Praesent sed pulvinar posuere nisl tincidunt. Iaculis sit quam magna congue. Amet vel non aliquet habitasse. Egestas erat odio et, eleifend turpis etiam blandit interdum. Nec augue ut senectus quisque diam quis. At augue accumsan, in bibendum. A eget et, eget quisque egestas netus vel. Velit, aliquet turpis convallis ullamcorper. Scelerisque sagittis condimentum pretium in vitae etiam lacinia quis amet. Porttitor consequat, sollicitudin vivamus pharetra nibh faucibus neque, viverra. Praesent amet sed lacus vitae.</p>
    <h4 className="h6">
      <i className="bx bx-plus-circle me-1 mt-n1 align-middle fs-5 text-primary"></i>
      PROS
    </h4>
    <ul className="mb-4 pb-2 ps-4">
      <li className="mb-1">A eu, ac nunc, volutpat. Augue enim ac justo, at elementum, arcu.</li>
      <li className="mb-1">At sodales quam felis ullamcorper iaculis tristique. Felis, etiam felis pellentesque sit neque.</li>
      <li className="mb-1">Porta ipsum quis lacus eu ipsum mattis sit quis. Massa, massa lectus porttitor laoreet ultricies odio fermentum arcu quam.</li>
      <li className="mb-1">Accumsan arcu neque, nisl, pellentesque fames justo consequat blandit lacus. Eget odio vel nulla vel.</li>
      <li className="mb-1">Diam ac phasellus est, eu urna purus blandit aliquam. Vitae accumsan et pellentesque diam in.</li>
      <li>Tellus arcu, lectus tincidunt neque nunc. Bibendum lacus, molestie ultrices sed arcu.</li>
    </ul>
    <h4 className="h6">
      <i className="bx bx-minus-circle me-1 mt-n1 align-middle fs-5 text-primary"></i>
      CONS
    </h4>
    <ul className="mb-4 pb-2 ps-4">
      <li className="mb-1">Donec maecenas justo, et tortor quam elementum pharetra velit. Auctor dictum purus sollicitudin et quam vehicula amet lacus, integer.</li>
      <li className="mb-1">Mi elit nibh erat facilisis. Volutpat eget malesuada mi in.</li>
      <li className="mb-1">Tincidunt iaculis eleifend arcu egestas. Sit gravida vestibulum quam scelerisque.</li>
      <li className="mb-1">Ornare elit, vel, ullamcorper nunc nulla pellentesque ut varius. Vitae tortor nulla a turpis erat fermentum, rhoncus.</li>
      <li>Gravida cursus nunc habitant aliquet lacus. Tempus, interdum nullam non quam ipsum ultricies ac.</li>
    </ul>
    <h2 className="h4">Conclusion</h2>
    <p className="mb-4 pb-2">Venenatis faucibus platea gravida amet sed sed urna volutpat. Aliquam neque, mi, justo odio semper. Egestas potentiquis neque nunc, rhoncus hendrerit. Viverra gravida pretium dolor eget placerat morbi proin eget. Vestibulum vitae ultrices vel sed sit quis. Ac quis diam at nulla libero. Turpis duis magna tellus condimentum.</p>
    <p className="mb-4 pb-2">Velit parturient tellus tellus, congue pulvinar tellus viverra. In cum massa mattis ac. Amet vitae massa ut mi etiam. Auctor aliquam tristique felis donec eu sit nisi. Accumsan mauris eget convallis mattis sed etiam scelerisque.</p>
      </div>
  )
}

export default Quotation